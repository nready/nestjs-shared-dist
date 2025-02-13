import { Request } from 'express';
import { ArgumentsHost, ExecutionContext } from '@nestjs/common';
import { INestApplication } from '@nestjs/common';
export declare function setupSwagger(app: INestApplication): void;
export declare function extractKey(path: string): string;
export declare const remove: <T>(arr: T[], predicate: (item: T) => boolean) => T[];
export declare const getRequest: <T>(ctx: ExecutionContext | ArgumentsHost) => any;
export declare const getURL: (request: Request) => string;
export declare function transformEndOfDate(date: Date | string): Date;
export declare const randomString: (length?: number) => string;
/**
 * Check a value is date or not. Following by YYYY-MM-DD
 * @param string
 * @returns true/false
 */
export declare function isDate(value: any): boolean;
export declare function getTodayFormatYYYYDDMM(): string;
/**
 * Check if any item in array1 exist in array2
 * @param arr1 array1
 * @param arr2 array2
 * @returns boolean
 */
export declare function hasCommonItemInArrays(arr1: [], arr2: []): boolean;
export declare function convertToAscii(str: string): number;
/**
 * Clean the given Object if there are some properties are null/undefine
 * @param {string} Object
 * @returns {boolean} Object
 */
export declare const cleanNullObject: <T>(obj: T) => T;
/**
 * Check if the given value is null/undefine
 * @param {string} value
 * @returns {boolean} true/false
 */
export declare const isNullable: (value: any) => boolean;
/**
 * Check if the given date is future date with the current date
 * @param {string} Date
 * @returns {boolean} true/false
 */
export declare function isFutureDate(value: any): boolean;
