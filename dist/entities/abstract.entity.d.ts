import { AbstractDto } from '../dtos/abstract.dto';
export declare abstract class AbstractEntity<T extends AbstractDto = AbstractDto> {
    createDate?: Date;
    effectDate?: Date;
    inactiveDate?: Date;
    dateLastMaint?: Date;
    version?: number;
    addedBy?: string;
    editedBy?: string;
    approvedBy?: string;
    note?: string;
    dtoClass?: new (entity: AbstractEntity, options?: any) => T;
    toDto(options?: any): T;
}
