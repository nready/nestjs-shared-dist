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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AbstractSearchService = void 0;
const typeorm_1 = require("typeorm");
const page_meta_dto_1 = require("../dtos/page-meta.dto");
const search_result_dto_1 = require("../dtos/search-result.dto");
const common_1 = require("@nestjs/common");
let AbstractSearchService = class AbstractSearchService {
    constructor(repo) {
        this.repo = repo;
        this.queryBuilder = ((model) => {
            const queryable = {};
            const excludeProperties = ['_page', '_take', '_orderBy', '_exact', '_q'];
            Object.keys(model).forEach(key => {
                const value = model[key];
                if (excludeProperties.includes(key) ||
                    value === null ||
                    value === undefined ||
                    value === '') {
                    return;
                }
                if (typeof value === 'string') {
                    if (model.exact) {
                        queryable[key] = value;
                    }
                    else {
                        queryable[key] = (0, typeorm_1.ILike)(`%${value}%`);
                    }
                }
                else if (typeof value === 'number' || typeof value === 'boolean') {
                    queryable[key] = value;
                }
                else if (value instanceof Date) {
                    queryable[key] = value;
                }
            });
            if (model.q && Object.keys(queryable).length === 0) {
                if (model.exact) {
                    queryable.fileName = model.q;
                }
                else {
                    queryable.fileName = (0, typeorm_1.ILike)(`%${model.q}%`);
                }
            }
            return queryable;
        });
    }
    async paginate(model) {
        const itemCount = await this.repo.countBy(this.queryBuilder(model));
        const data = await this.repo.find({
            where: this.queryBuilder(model),
            skip: (model.page - 1) * model.take,
            take: model.take,
            order: model.orderBy || { dateLastMaint: 'DESC' },
        });
        return new search_result_dto_1.SearchResultDto(new page_meta_dto_1.PageMetaDto({
            pageOptionsDto: {
                take: model.take,
                page: model.page,
                skip: (model.page - 1) * model.take,
            },
            itemCount,
        }), data);
    }
};
exports.AbstractSearchService = AbstractSearchService;
exports.AbstractSearchService = AbstractSearchService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], AbstractSearchService);
