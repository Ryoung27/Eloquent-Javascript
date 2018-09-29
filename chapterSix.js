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