// 1 написать цикл, который выводит в консоль числа от 0 до 9

// for (let i = 0; i <= 9; i++){
//     console.log(i);
// };

// const numbers = [12, 4, -32, 5, -37, -32, 5, 23];

// for (let i = 0; i < numbers.length; i++){
//     if( numbers[i] % 2 === 0) {
//         console.log(numbers[i]);
// } 
// };


// const arr = numbers.filter(element => element > 0);
// console.log(arr);


let arr = ['3', '6', '44', '12'];

console.log(arr.map(Number));
console.log(arr.map(el => Number(el)));
