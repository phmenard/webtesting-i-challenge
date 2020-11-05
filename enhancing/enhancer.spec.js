const enhancer = require('./enhancer.js');
// test away!

describe("enhancer tests", () =>{
    describe("repair", () => {
        it("should take in an item and restore it's durabilty", () =>{
            expect(enhancer.repair({
                name: "magic wond",
                durability: 10, 
                enhancement: 10,
            })).toEqual({
                name: "magic wond",
                durability: 100,
                enhancement : 10,
            })
        })
    })
})
