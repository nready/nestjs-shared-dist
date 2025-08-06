import { PaginationDto } from './pagination.dto';
export declare class BaseResponseDto {
    timestamp?: string;
    responseCode?: string;
    statusCode?: string;
    message?: string;
    error?: string;
    responseBody?: any;
    pageMeta?: PaginationDto;
}
