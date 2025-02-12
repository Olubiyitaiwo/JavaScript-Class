let animals = ["dog", "chicks","goat","fish", "rat","sheep","sheGoat"]

//console.log(animals.slice(3))

//console.log(animals.slice(1,3))

//console.log(animals.slice(1))

let answer = animals.splice(4,2,"hen", "cow")
console.log(answer)
console.log(animals)