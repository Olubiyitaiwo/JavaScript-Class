let animals = {
    name: "unknown",
    color : " ",
    sound : "",
    sound: function(){
        return '${this.name} makes a sound'
    }
}

let dog = Object.create(animals);
//console.log(dog);
dog.name = "Dog";
dog.color = "Brown";
//console.log(dog.color);
console.log(dog.sound())

let cat = {}
Object.setPrototypeOf(animals,cat);
cat.name = "PussyCat";
cat.sound = function(){
    return '${this.name} make a sound'
}
console.log(cat);

