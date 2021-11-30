const Logic = require("../dist/Logic.js")

test("properly adds two strings as number", ()=>{
    expect(Logic.Arithmetic("2","2","+")).toBe(4)
})
test("Correctly returns score of two players", ()=>{
    expect(Logic.ScoreKeeper([1,4,7,2,4], [3,4,2,4,4])).toStrictEqual([1,2])
})
test("Checks if two Kangaroos will meet at a position", ()=>{
    expect(Logic.PositionCheck(1,2,2,1)).toBe("YES")
})