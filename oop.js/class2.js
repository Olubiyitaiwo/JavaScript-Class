class Human{
    #name
    #age

    constructor(name, age){
        this.#age = age
        this.#name = name
    }

    set name(name){
        this.#name = name
    }
    get name(){
        return this.#name
    }

    speak = function(){
        console.log(this.name + "is speaking spanish")
    }
}

let personOne = new Human("Chinedu", 12);
console.log("")
console.log(personOne.name)
//console.log("")
//console.log(personOne.speak)
module.exports = Human;