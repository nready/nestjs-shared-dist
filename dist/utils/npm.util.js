"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NpmHelper = void 0;
const fs_1 = require("fs");
const constants_1 = require("../constants");
class NpmHelper {
    static get isMongooseInstalled() {
        return ((0, fs_1.existsSync)(this.getPath(constants_1.PACKAGES.Mongoose)) &&
            (0, fs_1.existsSync)(this.getPath(`@nestjs/${constants_1.PACKAGES.Mongoose}`)));
    }
    static get isTypeOrmInstalled() {
        return ((0, fs_1.existsSync)(this.getPath(constants_1.PACKAGES.TypeOrm)) &&
            (0, fs_1.existsSync)(this.getPath(`@nestjs/${constants_1.PACKAGES.TypeOrm}`)));
    }
    static get isPassportInstalled() {
        return ((0, fs_1.existsSync)(this.getPath(constants_1.PACKAGES.Passport)) &&
            (0, fs_1.existsSync)(this.getPath(`@nestjs/${constants_1.PACKAGES.Passport}`)));
    }
    static get isSwaggerInstalled() {
        return (0, fs_1.existsSync)(this.getPath(`@nestjs/${constants_1.PACKAGES.Swagger}`));
    }
    static getPath(packageName) {
        return this.nodeModulesPath + '/' + packageName;
    }
}
exports.NpmHelper = NpmHelper;
NpmHelper.nodeModulesPath = process.cwd() + '/node_modules';
