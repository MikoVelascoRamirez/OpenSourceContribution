const Reader = require("../../lib/utils/Reader");

describe("Test's suite for Reader utility", () => {
    test("1. Verifiying if the file exists", () => {
        const visualPartnersSourceData = Reader.readDirectory("src/data"); 
        expect(visualPartnersSourceData[0]).toBe("visualpartners.json");
    });

    test("2. Verifying if the route file exists", () => {
        const visualPartnersSourceDataRoute = Reader.readDirectory("src/data");
        expect(visualPartnersSourceDataRoute).not.toBe("ENOENT");
    });

    test("3. Verifying if the file returns an array", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        expect(data.constructor === Array).toBeTruthy();
    });

    test("4. Checking if file returns a not empty array", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        expect(data.length).toBeGreaterThan(0);
    });    

    test("5. Testing if every object in the array has all properties", () => {
        const data = Reader.readSourceData("src/data/visualpartners.json");
        for(let explorer of data){
            expect(Object.keys(explorer)).toEqual(expect.arrayContaining(["id", "name", "email", "credits", "enrollments", "previousCourses", "haveCertification"]));
        }

    });
});

/*  TODO: Testing if the route file exists
//  TODO: Testing if the file in the route exists
//  TODO: Testing if the file returns an array
//  TODO: Testing if the file returns a not empty array
//  TODO: Testing if every object in the array has all properties.
    TODO: Testing if every value of each object is not undefined
    TODO: Testing if every value of each object has the correct type value.
*/