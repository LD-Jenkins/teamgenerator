const Employee = require("../lib/Employee.js");

describe("Employee", () => {
    describe("getName", () => {
        it("should return name as 'Leighton'", () => {

            const name = "Leighton";
            const result = new Employee("Leighton", 1, "lj@email.com").getName();

                expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return Id as the number 1", () => {
            const id = 1;

            const result = new Employee("Leighton", 1, "lj@email.com").getId();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return email as 'lj@email.com'", () => {
            const email = "lj@email.com";

            const result = new Employee("Leighton", 1, "lj@email.com").getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getRole", () => {
        it("should return role as 'Employee'", () => {
            const role = "Employee";

            const result = new Employee("Leighton", 1, "lj@email.com").getRole();

            expect(result).toEqual(role);
        });
    });
});
