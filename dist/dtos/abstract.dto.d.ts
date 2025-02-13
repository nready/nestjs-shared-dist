import { AbstractEntity } from '../entities/abstract.entity';
export declare class AbstractDto {
    createDate?: Date;
    effectDate?: Date;
    inactiveDate?: Date;
    dateLastMaint?: Date;
    version?: number;
    addedBy?: string;
    editedBy?: string;
    approvedBy?: string;
    note?: string;
    constructor(abstract?: AbstractEntity);
}
