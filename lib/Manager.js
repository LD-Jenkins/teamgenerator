const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, offNum) {
        this.offNum = offNum;
        super(name, id, email);
    }
    getoffNum() {
        return this.offNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;