import { CallHandler, ExecutionContext, NestInterceptor } from '@nestjs/common';
import { Observable } from 'rxjs';
import { OkResponseDto } from '../dtos/base-response.dto';
export interface Response<T> {
}
export declare class TransformInterceptor<T> implements NestInterceptor<T, OkResponseDto> {
    intercept(context: ExecutionContext, next: CallHandler<T>): Observable<OkResponseDto>;
}
