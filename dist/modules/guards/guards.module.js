"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var GuardsModule_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuardsModule = void 0;
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const permissions_guard_1 = require("../../guard/permissions.guard");
const roles_guard_1 = require("../../guard/roles.guard");
let GuardsModule = GuardsModule_1 = class GuardsModule {
    static forRoot(options = {}) {
        const { global = true, permissionsGuard = true, rolesGuard = true, } = options;
        const providers = [];
        const exports = [];
        if (permissionsGuard) {
            exports.push(permissions_guard_1.PermissionsGuard);
            if (global) {
                providers.push({
                    provide: core_1.APP_GUARD,
                    useClass: permissions_guard_1.PermissionsGuard,
                });
            }
            providers.push(permissions_guard_1.PermissionsGuard);
        }
        if (rolesGuard) {
            exports.push(roles_guard_1.RolesGuard);
            if (global) {
                providers.push({
                    provide: core_1.APP_GUARD,
                    useClass: roles_guard_1.RolesGuard,
                });
            }
            providers.push(roles_guard_1.RolesGuard);
        }
        return {
            module: GuardsModule_1,
            providers,
            exports,
        };
    }
    static forFeature() {
        return {
            module: GuardsModule_1,
            providers: [permissions_guard_1.PermissionsGuard, roles_guard_1.RolesGuard],
            exports: [permissions_guard_1.PermissionsGuard, roles_guard_1.RolesGuard],
        };
    }
};
exports.GuardsModule = GuardsModule;
exports.GuardsModule = GuardsModule = GuardsModule_1 = __decorate([
    (0, common_1.Module)({})
], GuardsModule);
