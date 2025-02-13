"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransformInterceptor = void 0;
const common_1 = require("@nestjs/common");
const class_transformer_1 = require("class-transformer");
const operators_1 = require("rxjs/operators");
const constants_1 = require("../constants");
let TransformInterceptor = class TransformInterceptor {
    intercept(context, next) {
        const resp = context.switchToHttp().getResponse();
        // const request = context.switchToHttp().getRequest();
        // Extract query parameters for paging (e.g., page and pageSize)
        return next.handle().pipe((0, operators_1.map)((data) => {
            // if data res is a file.
            if (data && data.stream) {
                return data;
            }
            const res = { ...constants_1.DEFAULT_RESPONSE };
            if (data === null || data === void 0 ? void 0 : data.pageMeta) {
                res.pageMeta = data.pageMeta;
                res.responseBody = data.data;
            }
            else {
                res.responseBody = !data.responseBody
                    ? (0, class_transformer_1.instanceToPlain)(data)
                    : data.responseBody;
            }
            res.statusCode = context
                .switchToHttp()
                .getResponse()
                .statusCode.toString();
            res.message = data.message || res.message;
            const response = res;
            resp.status(common_1.HttpStatus.OK);
            return response;
        }));
    }
};
exports.TransformInterceptor = TransformInterceptor;
exports.TransformInterceptor = TransformInterceptor = __decorate([
    (0, common_1.Injectable)()
], TransformInterceptor);
