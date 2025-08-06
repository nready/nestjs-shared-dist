"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var RedisService_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisService = void 0;
const common_1 = require("@nestjs/common");
const ioredis_1 = require("ioredis");
const constants_1 = require("../../constants");
let RedisService = RedisService_1 = class RedisService {
    constructor(redisClient) {
        this.redisClient = redisClient;
        this.logger = new common_1.Logger(RedisService_1.name);
        this.isRedisAvailable = false;
        this.redisClient.on('connect', () => {
            this.isRedisAvailable = true;
        });
        this.redisClient.on('error', () => {
            this.isRedisAvailable = false;
        });
    }
    async setKey(key, value, ttlMinutes) {
        if (!this.isRedisAvailable)
            return;
        ttlMinutes = ttlMinutes || +constants_1.environment.redisTtl;
        key = `${constants_1.environment.redisPrefix}:${key}`;
        await this.redisClient.set(key, value, 'EX', ttlMinutes * constants_1.RedisTTL.MINUTE);
    }
    async getKey(key) {
        if (!this.isRedisAvailable)
            return null;
        key = `${constants_1.environment.redisPrefix}:${key}`;
        return await this.redisClient.get(key);
    }
    async deleteKey(key) {
        if (!this.isRedisAvailable)
            return;
        key = `${constants_1.environment.redisPrefix}:${key}`;
        await this.redisClient.del(key);
    }
    async increaseValue(key) {
        if (!this.isRedisAvailable)
            return;
        key = `${constants_1.environment.redisPrefix}:${key}`;
        await this.redisClient.incr(key);
    }
    async reset() {
        await this.redisClient.reset();
    }
    async existsKey(key) {
        if (!this.isRedisAvailable)
            return false;
        key = `${constants_1.environment.redisPrefix}:${key}`;
        const exists = await this.redisClient.exists(key);
        return exists > 0;
    }
};
exports.RedisService = RedisService;
exports.RedisService = RedisService = RedisService_1 = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('REDIS_CLIENT')),
    __metadata("design:paramtypes", [ioredis_1.Redis])
], RedisService);
