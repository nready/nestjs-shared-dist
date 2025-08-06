"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomLoggerService = void 0;
const common_1 = require("@nestjs/common");
const constants_1 = require("../../constants");
let CustomLoggerService = class CustomLoggerService {
    constructor() {
        this.isLoggingEnabled = constants_1.environment.loggingEnabled === 'true';
        this.logLevel = (constants_1.environment.logLevel || 'log');
    }
    formatLog(level, message, context, trace) {
        return JSON.stringify({
            timestamp: new Date().toISOString(),
            level,
            message,
            context: context || 'Application',
            traceId: this.getTraceId(),
            trace: trace || null,
        });
    }
    getTraceId() {
        return Math.random().toString(36).substring(7);
    }
    log(message, context) {
        if (!this.isLoggingEnabled)
            return;
        console.log(this.formatLog('INFO', message, context));
    }
    warn(message, context) {
        if (!this.isLoggingEnabled)
            return;
        console.warn(this.formatLog('WARN', message, context));
    }
    error(message, trace, context) {
        if (!this.isLoggingEnabled)
            return;
        console.error(this.formatLog('ERROR', message, context, trace));
    }
    debug(message, context) {
        if (!this.isLoggingEnabled || this.logLevel !== 'debug')
            return;
        console.debug(this.formatLog('DEBUG', message, context));
    }
    verbose(message, context) {
        if (!this.isLoggingEnabled || this.logLevel !== 'verbose')
            return;
        console.info(this.formatLog('VERBOSE', message, context));
    }
};
exports.CustomLoggerService = CustomLoggerService;
exports.CustomLoggerService = CustomLoggerService = __decorate([
    (0, common_1.Injectable)()
], CustomLoggerService);
