"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var ApplicationMiddleware_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.ApplicationMiddleware = void 0;
const common_1 = require("@nestjs/common");
const axios_1 = __importDefault(require("axios"));
const constants_1 = require("../constants");
let ApplicationMiddleware = ApplicationMiddleware_1 = class ApplicationMiddleware {
    constructor() {
        this.logger = new common_1.Logger(ApplicationMiddleware_1.name);
    }
    async use(req, res, next) {
        res.setHeader('X-Powered-By', 'NREADY LAB');
        if (req.path.includes('health') && req.method === 'GET') {
            return next();
        }
        const token = req.headers.authorization?.split(' ')[1];
        if (!token) {
            throw new common_1.UnauthorizedException('token_required');
        }
        const data = {
            accessToken: token,
        };
        const config = {
            headers: {
                'Content-Type': 'application/json',
                Authorization: 'Bearer ' + token,
            },
        };
        try {
            const introspectResponse = await axios_1.default.post(constants_1.environment.iamURL, data, config);
            const introspect = introspectResponse.data.responseBody;
            if (introspect.active) {
                req.user = {
                    id: introspect.user.id,
                    email: introspect.user.email,
                    roles: introspect.roles || [],
                    permissions: introspect.permissions || [],
                };
                return next();
            }
            else {
                this.logger.warn('Invalid token');
                throw new common_1.UnauthorizedException('Invalid token');
            }
        }
        catch (error) {
            this.logger.error(`IAM Token Validation Failed: ${error.response?.status || 'Unknown Status'} - ${error.response?.data?.message || error.message}`);
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
};
exports.ApplicationMiddleware = ApplicationMiddleware;
exports.ApplicationMiddleware = ApplicationMiddleware = ApplicationMiddleware_1 = __decorate([
    (0, common_1.Injectable)()
], ApplicationMiddleware);
