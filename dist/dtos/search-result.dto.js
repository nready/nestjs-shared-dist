"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SearchResultDto = void 0;
class SearchResultDto {
    constructor(pageMeta, data, dtoClass) {
        this.pageMeta = pageMeta;
        this.data = dtoClass ? data.map(entity => new dtoClass(entity)) : data;
    }
}
exports.SearchResultDto = SearchResultDto;
