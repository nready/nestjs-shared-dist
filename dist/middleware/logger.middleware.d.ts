import { NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
export declare class LoggerMiddleware implements NestMiddleware {
    use(req: Request | any, res: Response, next: NextFunction): void;
}
