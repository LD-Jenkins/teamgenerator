const Employee = require('./Employee');

class Manager extends Employee {
    constructor(name, id, email, offNum) {
        super(name, id, email);
        this.offNum = offNum;
    }
    getOffNum() {
        return this.offNum;
    }
    getRole() {
        return "Manager";
    }
}

module.exports = Manager;