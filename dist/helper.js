"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNullable = exports.cleanNullObject = exports.randomString = exports.getURL = exports.getRequest = exports.remove = void 0;
exports.setupSwagger = setupSwagger;
exports.extractKey = extractKey;
exports.transformEndOfDate = transformEndOfDate;
exports.isDate = isDate;
exports.getTodayFormatYYYYDDMM = getTodayFormatYYYYDDMM;
exports.hasCommonItemInArrays = hasCommonItemInArrays;
exports.convertToAscii = convertToAscii;
exports.isFutureDate = isFutureDate;
const fs_1 = require("fs");
const swagger_1 = require("@nestjs/swagger");
const constants_1 = require("./constants");
function setupSwagger(app) {
    const options = new swagger_1.DocumentBuilder()
        .setTitle('API')
        .setVersion('3.0.0')
        .addBearerAuth()
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, options);
    swagger_1.SwaggerModule.setup('documentation', app, document);
}
function extractKey(path) {
    return (0, fs_1.readFileSync)(path)
        .toString()
        .replace(/\n|\r/g, '')
        .replace(/[-]+[\w\s]+[-]+/g, '');
}
const remove = (arr, predicate) => {
    const results = arr.filter(predicate);
    for (const result of results) {
        arr.splice(arr.indexOf(result), 1);
    }
    return results;
};
exports.remove = remove;
const getRequest = (ctx) => {
    switch (ctx.getType()) {
        case 'ws':
            return ctx.switchToWs().getClient();
        case 'http':
            return ctx.switchToHttp().getRequest();
    }
};
exports.getRequest = getRequest;
const getURL = (request) => {
    return request.protocol + '://' + request.get('host');
};
exports.getURL = getURL;
function transformEndOfDate(date) {
    if (!date || date === 'null')
        return new Date();
    const newDate = new Date(date);
    newDate.setHours(23, 59, 59, 999);
    return newDate;
}
const randomString = (length = 60) => {
    let output = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (let i = 0; i < length; i++) {
        output += characters[Math.floor(Math.random() * length)];
    }
    return output;
};
exports.randomString = randomString;
function isDate(value) {
    let isDate = value instanceof Date;
    if (!isDate && typeof value === 'string' && value.length) {
        const regex = new RegExp(constants_1.REGEX_DATE_YYYY_MM_DD);
        if (regex.test(value))
            isDate = new Date(value).toDateString() !== 'undefined';
    }
    return isDate;
}
const toDate = new Date();
function getTodayFormatYYYYDDMM() {
    return `${toDate.getFullYear()}-${toDate.getMonth() < 10 ? '0' + toDate.getMonth() : toDate.getMonth()}-${toDate.getDate() < 10 ? '0' + toDate.getDate() : toDate.getDate()}`;
}
function hasCommonItemInArrays(arr1, arr2) {
    return arr1.some(item => arr2.includes(item));
}
function convertToAscii(str) {
    const asciiArray = [];
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        let asciiValue = char.charCodeAt(0);
        if (asciiValue === 160) {
            asciiValue = 32;
        }
        asciiArray.push(asciiValue);
    }
    return asciiArray.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
}
const cleanNullObject = (obj) => {
    Object.keys(obj).forEach(key => {
        const typedKey = key;
        if (obj[typedKey] === null) {
            delete obj[typedKey];
        }
    });
    return obj;
};
exports.cleanNullObject = cleanNullObject;
const isNullable = (value) => {
    return value == null || value == undefined;
};
exports.isNullable = isNullable;
function isFutureDate(value) {
    const futureDate = transformEndOfDate(new Date(value));
    const currentDate = new Date();
    return futureDate.getTime() > currentDate.getTime();
}
