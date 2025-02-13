"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UtilsService = void 0;
const bcrypt = __importStar(require("bcrypt"));
const _ = __importStar(require("lodash"));
const crypto = __importStar(require("crypto"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const constants_1 = require("../constants");
class UtilsService {
    static toDto(model, entity, options) {
        if (_.isArray(entity)) {
            return entity.map((u) => new model(u, options));
        }
        return new model(entity, options);
    }
    static generateHash(password) {
        return bcrypt.hashSync(password, 10);
    }
    static async validateHash(password, hash) {
        return bcrypt.compare(password, hash || '');
    }
    static generateRandomInteger(min, max) {
        return Math.floor(min + Math.random() * (max + 1 - min));
    }
    static generateRandomString(length) {
        return Math.random()
            .toString(36)
            .replace(/[^a-zA-Z0-9]+/g, '')
            .toUpperCase()
            .substr(0, length);
    }
    static getAge(d1, d2) {
        d2 = d2 || new Date();
        const diff = d2.getTime() - d1.getTime();
        return Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
    }
    static capitalizeName(name) {
        return _.capitalize(name);
    }
    /**
     * encode (hash) text to sha256
     * @param {string} text
     * @returns {string}
     */
    static encodeString(text) {
        return crypto.createHash('sha256').update(text).digest('hex');
    }
}
exports.UtilsService = UtilsService;
UtilsService.mergeObject = (A, B) => {
    return Object.keys(B).reduce((result, key) => {
        if (B[key] !== undefined) {
            result[key] = B[key];
        }
        return result;
    }, { ...A });
    // const res = {};
    // Object.keys({ ...A, ...B }).map(key => {
    //   res[key] = B[key] || A[key];
    // });
    // return res;
    // B = Object.keys(B).forEach(key => {
    //   if (B[key] === undefined) {
    //     delete B[key];
    //   }
    // });
    // return Object.assign(A, B);
};
// Parse ISO 8601 date (UTC by default)
UtilsService.getLocaleDate = (isoString, timeZone) => {
    return (0, moment_timezone_1.default)(isoString)
        .tz(timeZone || 'Asia/Ho_Chi_Minh')
        .format(constants_1.DATE_FORMAT);
};
