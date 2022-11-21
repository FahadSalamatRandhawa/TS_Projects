#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_1 = __importDefault(require("prompt"));
const paraGraph = prompt_1.default.get(['paraGraph'], function (err, res) {
    let paraGraph = String(res.paraGraph);
    console.log(paraGraph.split(" "));
    let wordCount = paraGraph.split(" ").length;
    console.log(`Words : ${wordCount}`);
});
