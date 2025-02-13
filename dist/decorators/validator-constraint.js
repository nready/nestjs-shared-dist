"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsFutureDate = exports.GreaterOrEqualDate = void 0;
exports.IsPhoneNumber = IsPhoneNumber;
exports.IsDateFormat = IsDateFormat;
exports.IsValidDoB = IsValidDoB;
const class_validator_1 = require("class-validator");
const constants_1 = require("../constants");
const helper_1 = require("../helper");
const common_1 = require("@nestjs/common");
let GreaterOrEqualDate = class GreaterOrEqualDate {
    validate(value, args) {
        const [relatedPropertyName] = args.constraints;
        const relatedValue = args.object[relatedPropertyName];
        if (value === null) {
            return true;
        }
        return value >= relatedValue;
    }
    defaultMessage(args) {
        const [relatedPropertyName] = args.constraints;
        return `${args.property} must be a date string and greater or equal ${relatedPropertyName}. Ex: YYYY-MM-DDT00:00:00.000Z`;
    }
};
exports.GreaterOrEqualDate = GreaterOrEqualDate;
exports.GreaterOrEqualDate = GreaterOrEqualDate = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'GreaterOrEqualDate' })
], GreaterOrEqualDate);
let IsFutureDate = class IsFutureDate {
    validate(date) {
        const currentDate = new Date(date);
        // Set the hours and minutes to the last hour of the day
        currentDate.setHours(23);
        currentDate.setMinutes(59);
        return currentDate >= new Date();
    }
    defaultMessage(args) {
        return `${args.property} must be a date string and greater or equal today. Ex: YYYY-MM-DDT00:00:00.000Z`;
    }
};
exports.IsFutureDate = IsFutureDate;
exports.IsFutureDate = IsFutureDate = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'IsFutureDate', async: false }),
    (0, common_1.Injectable)()
], IsFutureDate);
let IsPhoneNumberConstraint = class IsPhoneNumberConstraint {
    validate(phoneNumber) {
        // Regular expression for basic phone number validation
        const regex = constants_1.REGEX_VIETNAMESE_PHONE;
        return regex.test(phoneNumber);
    }
};
IsPhoneNumberConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isPhoneNumber', async: false })
], IsPhoneNumberConstraint);
function IsPhoneNumber(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isPhoneNumber',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: IsPhoneNumberConstraint,
        });
    };
}
let IsDateFormatConstraint = class IsDateFormatConstraint {
    validate(date) {
        return date ? (0, helper_1.isDate)(date) : true;
    }
};
IsDateFormatConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isDateFormat', async: false })
], IsDateFormatConstraint);
function IsDateFormat(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isDateFormat',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: IsDateFormatConstraint,
        });
    };
}
let IsValidDoBConstraint = class IsValidDoBConstraint {
    validate(date) {
        return date ? (0, helper_1.isDate)(date) && !(0, helper_1.isFutureDate)(date) : true;
    }
};
IsValidDoBConstraint = __decorate([
    (0, class_validator_1.ValidatorConstraint)({ name: 'isDateFormat', async: false })
], IsValidDoBConstraint);
function IsValidDoB(validationOptions) {
    return function (object, propertyName) {
        (0, class_validator_1.registerDecorator)({
            name: 'isValidDoB',
            target: object.constructor,
            propertyName: propertyName,
            constraints: [],
            options: validationOptions,
            validator: IsValidDoBConstraint,
        });
    };
}
