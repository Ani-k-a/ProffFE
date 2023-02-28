// реализация метода for each

// const arr = [1,2,3];

function forEach(arr, callback) {
    for (let i = 0; i < arr.length; i++) {
      callback(arr[i], i, arr);
    }
  }
  
// forEach(arr, function(el, ind, arr){
//   console.log(`value: ${el} index: ${ind} array: ${arr}`);
// });


// const arr = [1,2,3,4,5,6,7,8,9,10];
// let newArr = [];

// function forEach(arr, callback) {
//   for (let i = 0; i < arr.length; i++) {
//     callback(arr[i], i, arr);
//   }
// }

// forEach(arr, function (el) {
//   newArr.push(el * 10)
// })

// console.log(newArr);




// MAP

const arr = [1,2,3,4,5,6,7,8,9,10];

 function map(arr, callback) {
    let newArr = [];
    forEach(arr, function (el) {
      const newEl = callback(el);
      newArr.push(newEl);
    });
    return newArr;
  }

  const arrMain = map(arr, function(value){
    return value ** 2;
  });

console.log(arrMain);