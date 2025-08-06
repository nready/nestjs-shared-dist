"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var MessagingService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.MessagingService = void 0;
const common_1 = require("@nestjs/common");
const microservices_1 = require("@nestjs/microservices");
const amqp = __importStar(require("amqplib"));
const constants_1 = require("../../constants");
let MessagingService = MessagingService_1 = class MessagingService {
    constructor() {
        this.isConnected = false;
        this.logger = new common_1.Logger(MessagingService_1.name);
        this.ensureConnection();
    }
    async ensureConnection() {
        if (this.isConnected)
            return;
        try {
            this.client = microservices_1.ClientProxyFactory.create({
                transport: microservices_1.Transport.RMQ,
                options: {
                    urls: [constants_1.environment.rabbitmq],
                    queue: constants_1.environment.rabbitmqName,
                    queueOptions: {
                        durable: true, autoDelete: false,
                        arguments: {
                            'x-message-ttl': +constants_1.environment.rabbitmqTtl,
                        },
                    },
                },
            });
            await this.client.connect();
            this.isConnected = true;
            this.logger.log('✅ Connected to RabbitMQ');
        }
        catch (error) {
            this.isConnected = false;
            this.logger.error(`❌ RabbitMQ Connection Failed: ${error.message}`);
            setTimeout(() => this.ensureConnection(), 5000);
        }
    }
    async emit(queueName, message) {
        await this.ensureConnection();
        if (!this.isConnected) {
            this.logger.warn('⚠️ Cannot send message: RabbitMQ is down');
            return;
        }
        try {
            const connection = await amqp.connect(constants_1.environment.rabbitmq);
            const channel = await connection.createChannel();
            await channel.assertQueue(queueName || constants_1.environment.rabbitmqName, {
                durable: true,
            });
            channel.sendToQueue(queueName || constants_1.environment.rabbitmqName, Buffer.from(JSON.stringify(message)), {
                persistent: true,
            });
            this.logger.log(`📤 Persistent message sent to ${queueName}`);
            await channel.close();
            await connection.close();
        }
        catch (error) {
            this.logger.error(`❌ Failed to send message: ${error.message}`);
        }
    }
    async overwriteQueue(queueName, message) {
        await this.ensureConnection();
        if (!this.isConnected) {
            this.logger.warn('⚠️ Cannot overwrite queue: RabbitMQ is down');
            return;
        }
        try {
            const connection = await amqp.connect(constants_1.environment.rabbitmq);
            const channel = await connection.createChannel();
            await channel.assertQueue(constants_1.environment.rabbitmqName, {
                durable: true, autoDelete: false,
                arguments: {
                    'x-message-ttl': +constants_1.environment.rabbitmqTtl,
                },
            });
            await channel.purgeQueue(constants_1.environment.rabbitmqName);
            await this.emit(queueName, message);
            await channel.close();
            await connection.close();
        }
        catch (error) {
            this.logger.error(`❌ Failed to overwrite queue: ${error.message}`);
        }
    }
};
exports.MessagingService = MessagingService;
exports.MessagingService = MessagingService = MessagingService_1 = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [])
], MessagingService);
