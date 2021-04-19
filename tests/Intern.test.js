const Intern = require("../lib/Intern.js");

describe("Intern", () => {
    describe("getName", () => {
        it("should return name as 'Leighton'", () => {

            const name = "Leighton";
            const result = new Intern("Leighton", 1, "lj@email.com", "SMU").getName();

                expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return Id as the number 1", () => {
            const id = 1;

            const result = new Intern("Leighton", 1, "lj@email.com", "SMU").getId();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return email as 'lj@email.com'", () => {
            const email = "lj@email.com";

            const result = new Intern("Leighton", 1, "lj@email.com", "SMU").getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getSchool", () => {
        it("should return school name as 'SMU'", () => {
            const school = 'SMU';

            const result = new Intern("Leighton", 1, "lj@email.com", "SMU").getSchool();

            expect(result).toEqual(school);
        });
    });

    describe("getRole", () => {
        it("should return role as 'Intern'", () => {
            const role = "Intern";

            const result = new Intern("Leighton", 1, "lj@email.com", "SMU").getRole();

            expect(result).toEqual(role);
        });
    });
});