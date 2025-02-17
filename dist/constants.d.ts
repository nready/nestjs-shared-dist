import { OkResponseDto } from './dtos/base-response.dto';
export declare const banner = "\n\n\n_____   ___________________________________  __   _____________________ \n___  | / /__  __ __  ____/__    |__  __  / /   ___  /___    |__  __ )\n__   |/ /__  /_/ /_  __/  __  /| |_  / / /_  /    __  / __  /| |_  __  |\n_  /|  / _  _, _/_  /___  _  ___ |  /_/ /_  /     _  /___  ___ |  /_/ / \n/_/ |_/  /_/ |_| /_____/  /_/  |_/_____/ /_/      /_____/_/  |_/_____/  \n                                                                        \n\nPowered by NREADY LAB\n- Nam Le, leqnam@live.com (nam@nready.net)\n- https://nready.net\n\n\n";
export declare const jwtConstants: {
    secret: string;
    expiresIn: string;
    accessTokenSecret: string;
    accessTokenExpiration: string;
    refreshTokenSecret: string;
    refreshTokenExpiration: string;
    recoverCodeExpiration: number;
};
export declare const environment: {
    port: number;
    env: string;
    host: string;
    rabbitmq: string;
    rabbitmqName: string;
    rabbitmqTtl: string | number;
    rabbitmqAck: string | boolean;
    redisHost: string;
    redisPort: string | number;
    redisPrefix: string;
    redisTtl: string | number;
};
export declare const dbConfig: {
    port: string | undefined;
    host: string | undefined;
    username: string | undefined;
    database: string | undefined;
    schema: string | undefined;
    password: string;
};
export declare const REGEX_DATE_YYYY_MM_DD: RegExp;
export declare const REGEX_WHITESPACE_FIELD: RegExp;
export declare const REGEX_NORMAL_FIELD: RegExp;
export declare const REGEX_VIETNAMESE_PHONE: RegExp;
export declare const DATE_FORMAT = "yyyy-MM-DDTHH:mm:ss.SSSZ";
export declare const DEFAULT_RESPONSE: OkResponseDto;
export declare enum Sort {
    ASC = "ASC",
    DESC = "DESC"
}
export declare enum CombineQueryOption {
    AND = "AND",
    OR = "OR"
}
export declare enum SearchArrayOption {
    in = "in",
    notIn = "notIn",
    exists = "exists",
    notExists = "notExists",
    between = "between"
}
export declare enum SearchParams {
    page = "page",
    perPage = "size",
    sort = "sort",
    select = "select",
    fromDate = "fromDate",
    toDate = "toDate",
    createDate = "createDate"
}
export declare enum ResponseBodyType {
    array = "array",
    object = "object",
    string = "string",
    number = "number",
    boolean = "boolean"
}
export declare enum HeaderOptions {
    xChannel = "X-Channel",
    authorization = "Authorization",
    xRequestID = "X-Request-ID"
}
export declare enum StatusOptions {
    ACT = "ACT",
    IACT = "IACT"
}
export declare enum StatusOptionsFilter {
    ACT = "ACT",
    IACT = "IACT",
    ALL = ""
}
export declare enum SecretKeyType {
    DECRYPT = "DECRYPT",
    ENCRYPT = "ENCRYPT",
    VERIFY = "VERIFY"
}
export declare enum EAlgorithmType {
    sha256WithRSA = "sha256WithRSA",
    sha1WithRSA = "sha1WithRSA"
}
export declare const PACKAGES: {
    Mongoose: string;
    TypeOrm: string;
    Passport: string;
    Swagger: string;
};
export declare const AUTH_GUARD_TYPE = "jwt";
export declare const RedisTTL: {
    WEEK: number;
    DAY: number;
    HALFHOUR: number;
    FIVEMINUTE: number;
    MINUTE: number;
};
