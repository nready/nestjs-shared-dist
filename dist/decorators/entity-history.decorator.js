"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hisEntityMetadataKey = void 0;
exports.HistoryEntity = HistoryEntity;
exports.hisEntityMetadataKey = Symbol('History Entity Metadata Key');
function HistoryEntity(historyEntity) {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-function-type
    return (target) => {
        Reflect.defineMetadata(exports.hisEntityMetadataKey, historyEntity, target);
    };
}
