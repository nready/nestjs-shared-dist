"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RedisTTL = exports.AUTH_GUARD_TYPE = exports.PACKAGES = exports.EAlgorithmType = exports.SecretKeyType = exports.StatusOptionsFilter = exports.StatusOptions = exports.HeaderOptions = exports.ResponseBodyType = exports.SearchParams = exports.SearchArrayOption = exports.CombineQueryOption = exports.Sort = exports.DEFAULT_RESPONSE = exports.DATE_FORMAT = exports.REGEX_VIETNAMESE_PHONE = exports.REGEX_NORMAL_FIELD = exports.REGEX_WHITESPACE_FIELD = exports.REGEX_DATE_YYYY_MM_DD = exports.dbConfig = exports.environment = exports.jwtConstants = exports.banner = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
exports.banner = `


_____   ___________________________________  __   _____________________ 
___  | / /__  __ \__  ____/__    |__  __ \ \/ /   ___  /___    |__  __ )
__   |/ /__  /_/ /_  __/  __  /| |_  / / /_  /    __  / __  /| |_  __  |
_  /|  / _  _, _/_  /___  _  ___ |  /_/ /_  /     _  /___  ___ |  /_/ / 
/_/ |_/  /_/ |_| /_____/  /_/  |_/_____/ /_/      /_____/_/  |_/_____/  
                                                                        

Powered by NREADY LAB
- Nam Le, leqnam@live.com (nam@nready.net)
- https://nready.net


`;
exports.jwtConstants = {
    secret: process.env.JWT_SECRET || '1254546556577676765734567890',
    expiresIn: process.env.ACCESS_TOKEN_EXPIRATION || '3600s',
    accessTokenSecret: process.env.ACCESS_TOKEN_SECRET || 'VHEvqNDu',
    accessTokenExpiration: process.env.ACCESS_TOKEN_EXPIRATION || '3600s',
    refreshTokenSecret: process.env.REFRESH_TOKEN_SECRET || 'De3654669opt7j',
    refreshTokenExpiration: process.env.REFRESH_TOKEN_EXPIRATION || '86400s',
    recoverCodeExpiration: Number(process.env.RECOVER_CODE_EXPIRATION) || 300,
};
exports.environment = {
    port: Number(process.env.PORT) || 3000,
    env: process.env.NODE_ENV || 'development',
    host: '',
    rabbitmq: process.env.RABBITMQ_URL || 'amqp://localhost:5672',
    rabbitmqName: process.env.RABBITMQ_QUEUE_NAME || 'RND',
    rabbitmqTtl: process.env.RABBITMQ_TTL || 3600000,
    rabbitmqAck: process.env.RABBITMQ_ACK || false,
    redisHost: process.env.REDIS_HOST || 'localhost',
    redisPort: process.env.REDIS_PORT || 6379,
    redisPrefix: process.env.REDIS_PREFIX || 'RND',
    redisTtl: process.env.REDIS_TTL || 5,
};
exports.dbConfig = {
    port: process.env.DB_PORT,
    host: process.env.DB_HOST,
    username: process.env.DB_USERNAME,
    database: process.env.DB_NAME,
    schema: process.env.DB_SCHEMA,
    password: '' + process.env.DB_PASSWORD,
};
exports.REGEX_DATE_YYYY_MM_DD = /^\d{4}\-(0?[1-9]|1[012])\-(0?[1-9]|[12][0-9]|3[01])$/;
exports.REGEX_WHITESPACE_FIELD = /^\s+$/;
exports.REGEX_NORMAL_FIELD = /^[a-z0-9A-Z\s&_-\u00C0-\u1EF9]+$/;
exports.REGEX_VIETNAMESE_PHONE = /([\+84|84|0]+(3|5|7|8|9|1[2|6|8|9]))+([0-9]{8})\b/m;
exports.DATE_FORMAT = `yyyy-MM-DDTHH:mm:ss.SSSZ`;
exports.DEFAULT_RESPONSE = {
    timestamp: new Date().toISOString(),
    statusCode: '',
    message: 'Success',
};
var Sort;
(function (Sort) {
    Sort["ASC"] = "ASC";
    Sort["DESC"] = "DESC";
})(Sort || (exports.Sort = Sort = {}));
var CombineQueryOption;
(function (CombineQueryOption) {
    CombineQueryOption["AND"] = "AND";
    CombineQueryOption["OR"] = "OR";
})(CombineQueryOption || (exports.CombineQueryOption = CombineQueryOption = {}));
var SearchArrayOption;
(function (SearchArrayOption) {
    SearchArrayOption["in"] = "in";
    SearchArrayOption["notIn"] = "notIn";
    SearchArrayOption["exists"] = "exists";
    SearchArrayOption["notExists"] = "notExists";
    SearchArrayOption["between"] = "between";
})(SearchArrayOption || (exports.SearchArrayOption = SearchArrayOption = {}));
var SearchParams;
(function (SearchParams) {
    SearchParams["page"] = "page";
    SearchParams["perPage"] = "size";
    SearchParams["sort"] = "sort";
    SearchParams["select"] = "select";
    SearchParams["fromDate"] = "fromDate";
    SearchParams["toDate"] = "toDate";
    SearchParams["createDate"] = "createDate";
})(SearchParams || (exports.SearchParams = SearchParams = {}));
var ResponseBodyType;
(function (ResponseBodyType) {
    ResponseBodyType["array"] = "array";
    ResponseBodyType["object"] = "object";
    ResponseBodyType["string"] = "string";
    ResponseBodyType["number"] = "number";
    ResponseBodyType["boolean"] = "boolean";
})(ResponseBodyType || (exports.ResponseBodyType = ResponseBodyType = {}));
var HeaderOptions;
(function (HeaderOptions) {
    HeaderOptions["xChannel"] = "X-Channel";
    HeaderOptions["authorization"] = "Authorization";
    HeaderOptions["xRequestID"] = "X-Request-ID";
})(HeaderOptions || (exports.HeaderOptions = HeaderOptions = {}));
var StatusOptions;
(function (StatusOptions) {
    StatusOptions["ACT"] = "ACT";
    StatusOptions["IACT"] = "IACT";
})(StatusOptions || (exports.StatusOptions = StatusOptions = {}));
var StatusOptionsFilter;
(function (StatusOptionsFilter) {
    StatusOptionsFilter["ACT"] = "ACT";
    StatusOptionsFilter["IACT"] = "IACT";
    StatusOptionsFilter["ALL"] = "";
})(StatusOptionsFilter || (exports.StatusOptionsFilter = StatusOptionsFilter = {}));
var SecretKeyType;
(function (SecretKeyType) {
    SecretKeyType["DECRYPT"] = "DECRYPT";
    SecretKeyType["ENCRYPT"] = "ENCRYPT";
    SecretKeyType["VERIFY"] = "VERIFY";
})(SecretKeyType || (exports.SecretKeyType = SecretKeyType = {}));
var EAlgorithmType;
(function (EAlgorithmType) {
    EAlgorithmType["sha256WithRSA"] = "sha256WithRSA";
    EAlgorithmType["sha1WithRSA"] = "sha1WithRSA";
})(EAlgorithmType || (exports.EAlgorithmType = EAlgorithmType = {}));
exports.PACKAGES = {
    Mongoose: 'mongoose',
    TypeOrm: 'typeorm',
    Passport: 'passport',
    Swagger: 'swagger',
};
exports.AUTH_GUARD_TYPE = 'jwt';
exports.RedisTTL = {
    WEEK: 604800,
    DAY: 86400,
    HALFHOUR: 1800,
    FIVEMINUTE: 300,
    MINUTE: 60,
};
