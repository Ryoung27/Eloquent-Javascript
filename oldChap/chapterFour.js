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

let objectA = {a: 1, b: 2};
Object.assign(objectA, {b: 3, c: 4});
console.log(objectA);

let journal = [
    {events: ["work", "touched tree", "pizza", "running", "television"], squirrel: false},
    {events: ["work", "ice cream", "cauliflower", "lasanga"],
    squirrel: false},
    {events: ["weekend", "cycling", "peantuts"],
    squirrel: true}
];

function tableFor(event, journal) {
    let table = [0, 0, 0, 0];
    for(let i = 0; i < journal.length; i++){
        let entry = journal[i], index = 0;
        if(entry.events.includes(event)) index += 1;
        if(entry.squirrel) index += 2;
        table[index] += 1;
    }
    return table;
}
console.log(tableFor("pizza", JOURNAL))

function journalEvents(journal){
    let events = [];
    for(let entry of journal) {
        for(let event of entry.events) {
            if(!events.includes(event)){
                events.push(event);
            }
        }
    }
    return events;
}
console.log(journalEvents(JOURNAL));


function range(start, end){
    for(let i = start; i < end +1; i++){
        if(i < end){
            console.log(i)
        }else{
            console.log(end)
        }
    }
}

let arrayArray = [1, 2, 3, 4, 5];
console.log(arrayArray.reverse());
