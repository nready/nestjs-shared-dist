import { DynamicModule } from '@nestjs/common';
export interface GuardsModuleOptions {
    global?: boolean;
    permissionsGuard?: boolean;
    rolesGuard?: boolean;
}
export declare class GuardsModule {
    static forRoot(options?: GuardsModuleOptions): DynamicModule;
    static forFeature(): DynamicModule;
}
