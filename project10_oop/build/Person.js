"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Person = void 0;
class Person {
    constructor() {
        this.Personality = 'Unknown';
    }
    /**
     * getPeronality
 :string    */
    getPeronality() {
        return this.Personality;
    }
    setPersonality(num) {
        if (num === 1) {
            this.Personality = 'Extrovert';
        }
        else if (num === 2) {
            this.Personality = 'Introvert';
        }
        else {
            this.Personality = 'You are a mystery to us';
        }
    }
}
exports.Person = Person;
