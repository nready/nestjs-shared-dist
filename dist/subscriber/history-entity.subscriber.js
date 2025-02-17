"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.HistoryEntitySubscriber = void 0;
const typeorm_1 = require("typeorm");
const entity_history_decorator_1 = require("../decorators/entity-history.decorator");
let HistoryEntitySubscriber = class HistoryEntitySubscriber {
    async afterInsert(event) {
        await this.handleHistoryInsert(event);
    }
    async afterUpdate(event) {
        await this.handleHistoryInsert(event);
    }
    async afterSoftRemove(event) {
        await this.handleHistoryInsert(event);
    }
    async handleHistoryInsert(event) {
        try {
            const historyEntity = Reflect.getMetadata(entity_history_decorator_1.hisEntityMetadataKey, event.metadata.target);
            if (!historyEntity)
                return;
            if (!event.entity)
                return;
            const historyRepo = event.manager.getRepository(historyEntity);
            if (!historyRepo)
                return;
            await historyRepo.insert(event.entity);
        }
        catch (error) {
            console.error(`HistoryEntitySubscriber Error:`, error);
        }
    }
};
exports.HistoryEntitySubscriber = HistoryEntitySubscriber;
exports.HistoryEntitySubscriber = HistoryEntitySubscriber = __decorate([
    (0, typeorm_1.EventSubscriber)()
], HistoryEntitySubscriber);
