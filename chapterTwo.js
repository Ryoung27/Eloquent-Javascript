1;
!false;

let caught = 5 * 5;

let ten = 10;
console.log(ten * ten);

let mood = "light";
console.log(mood);
mood = "dark";
console.log(mood);

let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);

let one = 1, two = 2;
console.log(one + two);

var name = "Ayda";
const greeting = "Hello ";
console.log(greeting + name);

let x = 30;
console.log("The value of x ", x);

console.log(Math.max(2,4));

let theNumber = Number(prompt("Pick a number"));
console.log("Your number is the square root of " + theNumber * theNumber)

let num = Number(prompt("Pick a number"));

if (num < 10) {
    console.log("small");
} else if (num < 100) {
    console.log("medium")
} else {
    console.log("large")
}

for(let number = 0; number <= 12; number = number + 2){
    console.log(number)
}

let result =1;
for(let counter = 0; counter < 10; counter = counter + 1){
    result = result * 2;
}
console.log(result)

counter = counter + 1

counter += 1

hash = "#"
hashTwo = "#"

for(let number = 0; number < 7; number++){
    console.log(hash)
    hash = hash + hashTwo
}

for(let number = 0; number < 101; number ++) {
    if(number % 5 == 0 && number % 3 == 0){
       console.log("Fizzbuzz")
    }else if(number % 5 == 0){
       console.log("Fizz")
    }else if(number % 3 == 0){
       console.log("Buzz")
    }else{
       console.log(number)
        }
   }

for(let number = 0; number < 8; number++){
    if(number % 2 == 0){
        console.log(" # # # #")
    }else {
        console.log("# # # # ")
    }
}