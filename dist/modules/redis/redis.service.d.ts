import { Redis } from 'ioredis';
export declare class RedisService {
    private readonly redisClient;
    private readonly logger;
    private isRedisAvailable;
    constructor(redisClient: Redis);
    setKey(key: string, value: string, ttlMinutes?: number): Promise<void>;
    getKey(key: string): Promise<string | null>;
    deleteKey(key: string): Promise<void>;
    increaseValue(key: string): Promise<void>;
    reset(): Promise<void>;
    existsKey(key: string): Promise<boolean>;
}
