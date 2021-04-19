const Manager = require("../lib/Manager.js");

describe("Manager", () => {
    describe("getName", () => {
        it("should return name as 'Leighton'", () => {

            const name = "Leighton";
            const result = new Manager("Leighton", 1, "lj@email.com", 1).getName();

                expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return Id as the number 1", () => {
            const id = 1;

            const result = new Manager("Leighton", 1, "lj@email.com", 1).getId();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return email as 'lj@email.com'", () => {
            const email = "lj@email.com";

            const result = new Manager("Leighton", 1, "lj@email.com", 1).getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getOffNum", () => {
        it("should return office number as the number 1", () => {
            const offNum = 1;

            const result = new Manager("Leighton", 1, "lj@email.com", 1).getOffNum();

            expect(result).toEqual(offNum);
        });
    });

    describe("getRole", () => {
        it("should return role as 'Manager'", () => {
            const role = "Manager";

            const result = new Manager("Leighton", 1, "lj@email.com", 1).getRole();

            expect(result).toEqual(role);
        });
    });
});