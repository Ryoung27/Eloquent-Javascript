// This is from the debugging chapter.

function canYouSpotTheProblem() {
    "use strict";
    for(counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

function Person(name) { this.name = name; }
let ferdinand = Person("Ferdinand");
console.log(name);

