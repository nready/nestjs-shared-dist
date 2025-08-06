import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { DataSource, DataSourceOptions } from 'typeorm';
export declare const getDatabaseDataSourceOptions: ({ port, host, username, database, schema, password, }: {
    port: number;
    host: string;
    username: string;
    database: string;
    schema?: string;
    password: string;
}) => DataSourceOptions;
export declare const typeOrmConfig: TypeOrmModuleOptions;
export declare const DatabaseSource: DataSource;
