let rabbit = {};
rabbit.speak = function(line) {
    console.log("The rabbit says '${line}'")
};

rabbit.speak("I'm alive.");

//prototypes

let empty = {};
console.log(empty.toString);
console.log(empty.toString());

function makeRabbit(type) {
    let rabbit = Object.create(protoRabbit);
    rabbit.type = type;
    return rabbit;
}

class Rabbit {
    constructor(type) {
        this.type = type;
    }
    speak(line) {
        console.log("The '${this. type}' rabbit says '${line}'")
    }
}


let ages = {
    Boris: 39,
    Lian: 22,
    Julia: 62
}

console.log('Julia is ${ages["Julia"]}');