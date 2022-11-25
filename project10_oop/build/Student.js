"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Student = void 0;
const Person_1 = require("./Person");
class Student extends Person_1.Person {
    constructor() {
        super(...arguments);
        this._name = '';
    }
    Student() {
        this._name = "";
    }
    get getName() {
        return this._name;
    }
    set setName(v) {
        this._name = v;
    }
}
exports.Student = Student;
