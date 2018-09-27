//Set total = 0 and count = 1
let total = 0, count = 1;
//while count is less than or equal to 10
while (count <= 10) {
    // make total = to total + count
    total += count;
    // add one to count
    count += 1;
}
//console log total.
console.log(total)


// Creating a function called factorial
//that takes n as an argument.
function factorial(n) {
    // if n == 0, then the answer is one.
    if (n == 0) {
        return 1;
        // else subrtact 1 from n and then multiply by n
    } else {
        return factorial(n - 1) * n;
    }
}

factorial(5);