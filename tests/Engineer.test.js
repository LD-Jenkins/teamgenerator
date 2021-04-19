const Engineer = require("../lib/Engineer.js");

describe("Engineer", () => {
    describe("getName", () => {
        it("should return name as 'Leighton'", () => {

            const name = "Leighton";
            const result = new Engineer("Leighton", 1, "lj@email.com", "GHubUsr").getName();

                expect(result).toEqual(name);
        });
    });

    describe("getId", () => {
        it("should return Id as the number 1", () => {
            const id = 1;

            const result = new Engineer("Leighton", 1, "lj@email.com", "GHubUsr").getId();

            expect(result).toEqual(id);
        });
    });

    describe("getEmail", () => {
        it("should return email as 'lj@email.com'", () => {
            const email = "lj@email.com";

            const result = new Engineer("Leighton", 1, "lj@email.com", "GHubUsr").getEmail();

            expect(result).toEqual(email);
        });
    });

    describe("getOffNum", () => {
        it("should return github account name as 'GHubUsr'", () => {
            const gHub = "GHubUsr";

            const result = new Engineer("Leighton", 1, "lj@email.com", "GHubUsr").getGHub();

            expect(result).toEqual(gHub);
        });
    });

    describe("getRole", () => {
        it("should return role as 'Engineer'", () => {
            const role = "Engineer";

            const result = new Engineer("Leighton", 1, "lj@email.com", "GHubUsr").getRole();

            expect(result).toEqual(role);
        });
    });
});