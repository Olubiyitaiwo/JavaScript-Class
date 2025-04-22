function Human(name, age, complexion){
    this.name = name;
    this.age = age;
    this.complexion = complexion

    this.describe = ()=>{
        return 'My name is ${this.name}, I am ${this.age} years old.'
    }
}

let personOne = new Human("Esther", 14, "Oyinbo")
console.log(" ")
console.log(personOne)
console.log(personOne.describe())
module.exports = Human