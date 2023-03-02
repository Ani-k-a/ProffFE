// function forEach(arr, callback) {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i, arr);
//     }
//   }

//   function map(arr, callback) {
//     let newArr = [];
//     forEach(arr, function (el, i, arr) {
//       const newEl = callback(el, i, arr);
//       newArr.push(newEl);
//     });
//     return newArr;
//   }


// const forEach= (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//       callback(arr[i], i, arr);
//     }
//   }

//  const map = (arr, callback) => {
//     let newArr = [];
//     forEach(arr, (el, i, arr) => 
//       newArr.push(callback(el, i, arr))
//       );
//     return newArr;
//   }


// REDUCE

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// const forEach = (arr, callback) => {
//     for (let i = 0; i < arr.length; i++) {
//         callback(arr[i], i, arr);
//     }
// }

// function reduce(arr, callback, initial) {
//     let acc = initial;
//     forEach(arr, (el, ind, arr) => {
//         acc = acc === undefined ? el : callback(acc, el);
//     })
//     return acc;
// }

// const reduceResult = reduce(array, (prev, current) => prev + current, 1);

// console.log(reduceResult); // 55


// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// let result = array.reduce((acc, el) => acc *= el);

// console.log(result);


// Сделать функцию, котрая  при ввобе числа выводит число с таким порядкивым номером


