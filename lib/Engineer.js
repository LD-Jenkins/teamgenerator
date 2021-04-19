const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, gHub) {
        super(name, id, email);
        this.gHub = gHub;
    }
    getGHub() {
        return this.gHub;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;