//Manipulation of data
let listOfNumbers = [2, 3, 5, 7, 11];
console.log(listOfNumbers[2]);
console.log(listOfNumbers[0]);
console.log(listOfNumbers[2 -1]);

let doh = "Doh";
console.log(typeof doh.toUpperCase);
console.log(doh.toUpperCase());

let sequence = [1, 2, 3];
sequence.push(4);
sequence.push(5);
console.log(sequence);
console.log(sequence.pop());
console.log(sequence);

let day1 = {
    squirrel: false,
    events: ["work", "touched tree", "pizza", "running"]
};
console.log(day1.squirrel);
console.log(day1.wolf);
console.log(day1.wolf);

let anObject = {left: 1, right: 2};
console.log(anObject.left);

delete anObject.left;
console.log(anObject.left);

console.log("left" in anObject);
console.log("right" in anObject);