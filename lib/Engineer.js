const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gHub) {
        this.gHub = gHub;
        super(name, id, email);
    }
    getGHub() {
        return this.gHub;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;