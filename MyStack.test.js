const {getMyStack} = require("./MyStack");

test("return stack list",()=>{
    let numbers = [5, 10, 15, 20]

    let result = getMyStack(numbers)
    let answer = [5, 10, 15, 20]
    expect(result).toBe(answer)
})