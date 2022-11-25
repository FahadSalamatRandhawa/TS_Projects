"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor() {
        this.FirstName = '';
        this.LastName = '';
        this.Gender = '';
        this.MobileNumber = '';
        this.Age = 0;
    }
    //Methods
    customerInfo() {
        return `Name: ${this.FirstName}${this.LastName}\nAge: ${this.Age}\nGender ${this.Gender}\n Contact: ${this.MobileNumber}\n`;
    }
}
