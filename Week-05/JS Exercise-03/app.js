// some lovely numbers
const ids = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144];

// add all numbers together
const sum = ids.reduce((accumulator, current) => accumulator + current); // 376

console.log(sum);
