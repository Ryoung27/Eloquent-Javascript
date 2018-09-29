let total = 0, count = 1;
while(count <= 10){
    total += count;
    count += 1;
}
console.log(total);

console.log(sum(range(1,10)));

for(let i = 0; i <10; i++){
    console.log(i);
}

function repeatLog(n) {
    for(let i = 0; i < n; i++) {
        console.log(i);
    }
}

function greaterThan(n){
    return m => m > n;
}
let greaterThan10 = greaterThan(10);
console.log(greatherThan10(11));