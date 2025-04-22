const {getOddNumbers, getStudents, isScores,addPointToExam, findSquareOfAList} = require("./Filter");

beforeEach(()=>(
    numbers = [2,3,4,5,6,7]

))
test("return odd numbers", ()=>{
    let result = getOddNumbers(numbers);
    let  ans = [3,5,7];
    expect(result).toEqual(ans);
});

//  test("retuen word with length greater than four", ()=>{
//     let words = ["hello", "world", "javascript", "java", "egg"];
//     let result = getWordsGreaterThanFourLetters(words)
//     let answer = ["hello", "world", "javascript", "java", "egg"];
//     expect(result).toEqual(answer)
// })

test("Return Object with age greater than 20", ()=>{
    const students = [
        {name: "John", age: 20},
        {name: "Jane", age: 22},
        {name: "Oyin", age: 32},
        {name: "Uzo", age: 6},
    ]
     let result =   getStudents(students) 
     let answer = [{name: "Jane", age: 22},{name: "Oyin", age: 32}]
     expect(result).toStrictEqual(answer)
})

test("Find scores greater than or equal to seventy", ()=>{
    const scores = [50,79,87,34,90,98,67,45,89,91]
        let result = isScores(scores)
        let answer = [79,87,90,98,89,91]
        expect(result).toEqual(answer)
 
})

test("Add points to exams", ()=>{
    const score = [85,92,78,88,95]
    let result = addPointToExam(score)
    let answer = [90,97,83,93,100]
    expect(result).toEqual(answer)
})

test("Find square of a list", ()=>{
    const integers = [2,4,6,8,10]
    let result = findSquareOfAList(integers)
    let answer = [4,16,36,64,100]
    expect(result).toEqual(answer)
})