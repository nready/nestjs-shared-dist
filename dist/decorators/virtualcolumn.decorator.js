"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VIRTUAL_COLUMN_KEY = void 0;
exports.VirtualColumn = VirtualColumn;
require("reflect-metadata");
exports.VIRTUAL_COLUMN_KEY = Symbol('VIRTUAL_COLUMN_KEY');
function VirtualColumn(name) {
    return (target, propertyKey) => {
        const metaInfo = Reflect.getMetadata(exports.VIRTUAL_COLUMN_KEY, target) || {};
        metaInfo[propertyKey] = name !== null && name !== void 0 ? name : propertyKey;
        Reflect.defineMetadata(exports.VIRTUAL_COLUMN_KEY, metaInfo, target);
    };
}
// Usage:
// import { VirtualColumn } from "src/database/decorators/virtual-column.decorator";
// import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
// @Entity({ name: "users" })
// export class UserEntity {
//   @PrimaryGeneratedColumn()
//   public id: number;
//   @Column()
//   public firstName: string;
//   @Column()
//   public lastName: string;
//   @VirtualColumn()
//   public fullName: string;
// }
