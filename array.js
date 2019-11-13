const table = [1,4,3,5,4,8,7,8,9];

console.log(table);
console.log(table.sort());

console.log("------------foreach------------");

table.forEach(a => {
    console.log(a * 2);
});

console.log("------------Map------------");

const x = table.map(a => {
    return a * 3;
});
console.log (x);

console.log("---------------------------");

const myNumber = x.find(i =>i == 12);
console.log("My NUMBER IS: " + myNumber);

console.log("---------------------------");

const selectedNumbers = x.filter(i => i > 15 && i < 24 );
console.log(selectedNumbers);






