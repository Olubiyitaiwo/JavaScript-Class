const isOdd = (numbers)=>{
    let answer = numbers % 2 != 0;
    return answer;

}
const score = (numbers)=>{
let result = numbers >= 70;
return result
}

const newScores = (marks)=>{
  let  result = marks.map(eachMark => eachMark + 5)
  return result
}

const newList = (numbers)
let answer = numbers.map(square => number * number)
return newList


function getOddNumbers(array){
   return array.filter(isOdd);
}

// const getWordsGreaterThanFourLetters = (arrayofwords) => {
//     return arrayofwords.filter((word) => word.lenght > 4);
// }

function getStudents(students){
    return students.filter((students)=> students.age > 20)
}
function isScores(grades){
     return grades.filter(score);
}
function addPointToExam(numbers){
    return numbers.map(newScores);
}
function findSquareOfAList(newList){
    return newList.map(integers);
}
    
module.exports = {getOddNumbers, getStudents, isScores, addPointToExam, findSquareOfAList};