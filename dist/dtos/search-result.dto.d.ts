import { PageMetaDto } from './page-meta.dto';
export declare class SearchResultDto<T> {
    pageMeta: PageMetaDto;
    data: T[];
    constructor(pageMeta: PageMetaDto, data: T[] | any[], dtoClass?: new (entity: any) => T);
}
