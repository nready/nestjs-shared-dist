export declare class MessagingService {
    private client;
    private isConnected;
    private readonly logger;
    constructor();
    private ensureConnection;
    emit(queueName: string, message: any): Promise<void>;
    overwriteQueue(queueName: string, message: any): Promise<void>;
}
