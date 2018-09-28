const square = function(x){
    return x * x;
};
console.log(square(12))

const makeNoise = function() {
    console.log("Pling!")
}
makeNoise();

const power = function(base, exponent){
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
};
console.log(power(2, 5))


let x = 10;
if (true) {
    let y = 20;
    let z = 30;
    console.log(x + y + z);
}
console.log(x+z);

