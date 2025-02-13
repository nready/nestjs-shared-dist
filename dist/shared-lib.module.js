"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var SharedLibModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.SharedLibModule = void 0;
const common_1 = require("@nestjs/common");
const object_mapping_enum_1 = require("./interfaces/object-mapping.enum");
const npm_util_1 = require("./utils/npm.util");
let SharedLibModule = SharedLibModule_1 = class SharedLibModule {
    static forRoot(o = object_mapping_enum_1.ObjectMapping.TypeOrm) {
        if (o === object_mapping_enum_1.ObjectMapping.TypeOrm) {
            if (!npm_util_1.NpmHelper.isTypeOrmInstalled) {
                const errorMessage = 'Missing TypeOrm dependencies.';
                common_1.Logger.error(errorMessage);
                throw new Error(errorMessage);
            }
            return {
                module: SharedLibModule_1,
                // providers: [{ provide: AbstractCoreService, useClass: AbstractTypeOrmService }]
            };
        }
    }
};
exports.SharedLibModule = SharedLibModule;
exports.SharedLibModule = SharedLibModule = SharedLibModule_1 = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({})
], SharedLibModule);
