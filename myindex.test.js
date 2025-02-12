const {multiply, addTwoNumbers, divideTwoNumbers} = require("./index.js")

	let numberOne = 2; 
	let numberTwo = 6;        //Arrange

test('multiply two numbers', ()=>{
	let numberOne = 2;
	let numberTwo = 6;        //Arrange

	let result = multiply(numberOne, numberTwo);  // Act

	let answer = 12;
	expect(result).toBe(answer);  //Assert

})

test("add two numbers", ()=>{

let sum = addTwoNumbers(numberOne, numberTwo);
let answer = 8;
expect(sum).toBe(answer);

})

test("divide two numbers", ()=>{

let quotient = divideTwoNumbers(numberOne, numberTwo);
let answer = 3;
expect(quotient).toBe(answer);

})

test('return odd number', ()=>{
let arrayOfNumbers = [1,2,3,4,5];
let result = getOddNumbers(arrayOfNumbers);
let answer = [1,3,5];
expect(result).toEqual(answer);

})
