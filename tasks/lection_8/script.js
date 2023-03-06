// const numbers = [12, 5, 32, 6, 4, 7, 43, 12];
// вывести в консоль числа, котоыре меньше 20

// numbers.forEach(el=> {
//     if (el <20) {
//         console.log(el);
//     }
// })

// console.log(...numbers.filter(el => el < 20))




// вывести в консоль числа, котоыре меньше 20
// сформирйте новый массив на основе numbers где все отрицательные числа
// изменены на положительные -5 -> 5

// const numbers2 = [12, 5, -32, 6, -4, 7, -43, 12];
// console.log(numbers2.map(Math.abs));
// console.log(numbers2.map(el => el > 0 ? el : -el));




// сформировать массив из значений value
const numbers = [
    {id: 1, value: 52},
    {id: 2, value: 42},
    {id: 3, value: 32},
    {id: 4, value: 22},
    {id: 5, value: 12},
];

console.log(numbers.map(({value}) => value));








