const isOdd = (numbers)=>{
    let answer = numbers % 2 != 0;
    return answer;

}
const score = (numbers)=>{
let result = numbers >= 70;
return result
}

const extraMark = (number)=>{
    let result = number + number
    return result
} 

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
function addPointToExam(extraMark)
    return scores.map(scores)=> scores + number
    

module.exports = {getOddNumbers, getStudents, isScores, addPointToExam}