import { PageOptionsDto } from './page-options.dto';
interface IPageMetaDtoParameters {
    pageOptionsDto: PageOptionsDto;
    itemCount: number;
}
export declare class PageMetaDto {
    page?: number;
    take?: number;
    itemCount?: number;
    pageCount?: number;
    constructor({ pageOptionsDto, itemCount }: IPageMetaDtoParameters);
}
export {};
