
// 1 задача 1 вариант решения

// function combineMap(arr, callback1, callback2) {
// let newArr=[];
//     for (let i = 0; i < arr.length; i++) {
//        newArr.push(callback2(callback1(arr[i])));
//     }
//         return newArr;
// }

// function square(value) {
//     return value * value;
// };

// function addOne(value) {
//     return value + 1;
// };

// const arr = combineMap([1, 2, 3], square, addOne);
// console.log(arr);

// function forEach(arr, cb) { // cb = iterator
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// }

// function combineMap(arr, callback1, callback2) {
//     const newArr = [];
//     function iterator(el) {
//         newArr.push(callback2(callback1(el)));
//     }
//     forEach(arr, iterator);
//     return newArr;
// }

// function square(value) {
//     return value * value;
// }

// function addOne(value) {
//     return value + 1;
// }

// const arr = combineMap([1, 2, 3], square, addOne); // [ 1 * 1 + 1 = 2, 2 * 2 + 1 = 5, 3 * 3 + 1 = 10 ] [2. 5. 10]

// console.log(arr);


// 2 задача 

// function forEach(arr, cb) { 
//     for (let i = 0; i < arr.length; i++) {
//         cb(arr[i], i, arr);
//     }
// }

// function transform(n) {
//     return n * (n - 1);
// }
// применяет callback ко всем чётным элементам массива
// function transformEven(arr, callback) {
//     const newArr1 = [];
//     function iterator(el) {
//         if (el % 2 === 0){
//             newArr1.push(callback(el))}
//          else   newArr1.push(el);
//     }
//     forEach(arr, iterator);
//     return newArr1;
// }

// применяет callback ко всем нечётным элементам массива
// function transformOdd(arr, callback) {
//     const newArr2 = [];
//     function iterator(el) {
//         if (el % 2 !== 0){
//             newArr2.push(callback(el))}
//          else   newArr2.push(el);
//     }
//     forEach(arr, iterator);
//     return newArr2;

// }

// const arr1 = transformEven([1, 2, 3, 4, 5], transform); // [0, 2, 6, 4, 20]
// const arr2 = transformOdd([1, 2, 3, 4, 5], transform); // 
// console.log(arr1);
// console.log(arr2);


// Функция forEach последовательно перебирает все элементы массива с 0 по последний и 
// вызывает функцию callback для каждого отдельного элемента массива, ЕСЛИ функция condition для этого элемента
// вернула true

function forEach(arr, callback) {
    for(let i = 0; i < arr.length; i ++) {
        const item = arr[i];
        callback(item);
    }
}

forEach([1, 2, 3, 4, 5], function(item) {
    console.log("Hello, my dear item: ", item);
}, function(item) {
    return item > 2;
});

// Hello, my dear item: 3
// Hello, my dear item: 4
// Hello, my dear item: 5

forEach([10, 11, 2, 15], function(item) {
    console.log("Hello, my awesome item: ", item);
}, function(item) {
    return item % 2 === 0;
});

// Hello, my awesome item: 10