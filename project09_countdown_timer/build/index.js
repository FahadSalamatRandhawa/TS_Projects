#!/usr/bin/env node
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import prompt from 'prompt';
function StopWatchFunction() {
    return __awaiter(this, void 0, void 0, function* () {
        let inputHours = 0;
        let inputMinutes = 0;
        let inputSeconds = 0;
        let inputInSeconds;
        inputHours = Number((yield prompt.get([{
                name: 'Hours',
                type: 'number',
                pattern: /^d+$/,
                message: 'Must be number',
                conform: (value) => {
                    if (isNaN(value)) {
                        return false;
                    }
                    return true;
                }
            }])).Hours);
        inputMinutes = Number((yield prompt.get([{
                name: 'Minutes',
                type: 'number',
                pattern: /^d+$/,
                message: 'Must be number',
                conform: (value) => {
                    if (isNaN(value)) {
                        return false;
                    }
                    return true;
                }
            }])).Minutes);
        inputSeconds = Number((yield prompt.get([{
                name: 'Seconds',
                type: 'number',
                pattern: /^d+$/,
                message: 'Must be number',
                conform: (value) => {
                    if (isNaN(value)) {
                        return false;
                    }
                    return true;
                }
            }])).Seconds);
        console.log(inputHours, inputMinutes, inputSeconds);
        inputInSeconds = (inputHours * 60 * 60) + (inputMinutes * 60) + (inputSeconds);
        const dateObject = new Date;
        const startingTimeInSeconds = Math.floor(dateObject.getTime() / 1000);
        let countingSeconds = Math.round(dateObject.getTime() / 1000);
        const endPoint = startingTimeInSeconds + inputInSeconds;
        let stopWatchInterval = setInterval(() => {
            //console.log(countingSeconds)
            if (inputSeconds < 0 && inputMinutes > 0) {
                inputMinutes--;
                inputSeconds = 59;
            }
            else if (inputMinutes <= 0 && inputHours > 0) {
                inputHours--;
                inputMinutes = 59;
            }
            if (inputSeconds < 0) {
                console.log(`\t\n --- Timer Ended --- \n`);
                clearInterval(stopWatchInterval);
            }
            if (inputHours > 0 || inputMinutes > 0 || inputSeconds >= 0) {
                console.log(`Hours:${inputHours} Minutes:${inputMinutes} Seconds:${inputSeconds}`);
                countingSeconds++;
                inputSeconds--;
            }
            if (countingSeconds > endPoint) {
                console.log(`\t\n --- Timer Ended --- \n`);
                clearInterval(stopWatchInterval);
            }
        }, 1000);
    });
}
StopWatchFunction();
