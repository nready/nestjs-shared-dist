import { Sort } from '../constants';
export declare class PageOptionsDto {
    readonly order?: Sort;
    readonly page?: number;
    readonly take?: number;
    get skip(): number;
}
