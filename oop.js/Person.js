const Human = require("./class2")

class Person extends Human{
    #gender;

    constructor(name, age, gender){
        super(name, age)
        this.#gender = gender
    }

    set gender(gender){
        this.#gender = gender
    }
    get gender(){
        return this.#gender
    }

    

    speak = function(){
        console.log(this.name + "he is speaking spanish")
    }
}

personOne = new Person("Esther", 12, "sheMale")

console.log("")
console.log(personOne.age)