import { DynamicModule } from '@nestjs/common';
import { ObjectMapping } from './interfaces/object-mapping.enum';
export declare class SharedLibModule {
    static forRoot(o?: ObjectMapping): DynamicModule;
}
