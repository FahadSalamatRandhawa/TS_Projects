#! /usr/bin/env node
"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = __importDefault(require("prompt"));
const colors_1 = __importDefault(require("colors"));
const currencyChart = {
    '1': { name: 'Euro', value: 0.969675, usdValue: 1.031274 },
    '2': { name: 'British Pound', value: 0.841106, usdValue: 1.188910 },
    '3': { name: 'Indian Rupee', value: 81.549155, usdValue: 0.012263 },
    '4': { name: 'Australian Dollar', value: 1.496299, usdValue: 0.668316 },
    '5': { name: 'Canadian Dollar', value: 1.338464, usdValue: 0.747125 },
    '6': { name: 'Singapore Dollar', value: 1.376042, usdValue: 0.726722 },
    '7': { name: 'Swiss Franc', value: 0.954782, usdValue: 1.047359 },
    '8': { name: 'Malaysian Ringgit', value: 4.552072, usdValue: 0.219680 },
    '9': { name: 'Japanese Yen', value: 140.356052, usdValue: 0.007125 },
    '10': { name: 'Chinese Yuan Renminbi', value: 7.115541, usdValue: 0.140537 }
};
const scheema = [
    {
        name: "Your_Currency",
        pattern: /^\d/,
        message: "must be number",
        type: 'number',
        description: 'Your Currency<id>',
        required: true,
        conform: function (value) {
            if (isNaN(value)) {
                return false;
            }
            return true;
        }
    },
    {
        name: "Amount",
        pattern: /^\d/,
        message: "must be number",
        type: 'number',
        description: 'Amount',
        required: true,
        conform: function (value) {
            if (isNaN(value)) {
                return false;
            }
            return true;
        }
    },
    {
        name: "Convert_To",
        pattern: /^\d+$/,
        message: "must be number",
        type: 'number',
        description: 'Convert To<id>',
        required: true,
        conform: function (value) {
            if (isNaN(value)) {
                return false;
            }
            return true;
        }
    }
];
function currencyCovert() {
    return __awaiter(this, void 0, void 0, function* () {
        prompt_1.default.message = colors_1.default.yellow('Question!');
        prompt_1.default.delimiter = colors_1.default.white('<-->\n');
        console.log(currencyChart);
        prompt_1.default.get(scheema, function (err, res) {
            let num = Number(res.Your_Currency);
            console.log(currencyChart[num], res.Amount);
        });
    });
}
currencyCovert();
