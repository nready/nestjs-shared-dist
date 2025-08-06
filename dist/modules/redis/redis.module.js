"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisModule = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = __importDefault(require("ioredis"));
const constants_1 = require("../../constants");
const redis_service_1 = require("./redis.service");
let RedisModule = class RedisModule {
};
exports.RedisModule = RedisModule;
exports.RedisModule = RedisModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        providers: [
            {
                provide: 'REDIS_CLIENT',
                useFactory: async () => {
                    const logger = new common_1.Logger('RedisModule');
                    const client = new ioredis_1.default({
                        host: constants_1.environment.redisHost,
                        port: Number(constants_1.environment.redisPort),
                        retryStrategy: times => {
                            const delay = Math.min(times * 1000, 10000);
                            logger.warn(`🔄 Redis reconnecting in ${delay / 1000}s...`);
                            return delay;
                        },
                    });
                    client.on('error', err => {
                        logger.warn('❌ Redis Connection Error:', err);
                    });
                    client.on('connect', () => {
                        logger.log('✅ Redis Connected Successfully');
                    });
                    return client;
                },
            },
            redis_service_1.RedisService,
        ],
        exports: ['REDIS_CLIENT', redis_service_1.RedisService],
    })
], RedisModule);
