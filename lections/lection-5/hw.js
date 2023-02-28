
// home work
//  1 Исправить мап, что б он принимал три аргумента


function forEach(arr, callback) {
  for (let i = 0; i < arr.length; i++) {
    callback(arr[i], i, arr);
  }
}

// const arr = [1,2,3,4,5,6,7,8,9,10];

//  function map(arr, callback) {
//     let newArr = [];
//     forEach(arr, function (el) {
//       const newEl = callback(el);
//       newArr.push(newEl);
//     });
//     return newArr;
//   }

//   const arrMain = map(arr, function(value){
//     return value ** 2;
//   });

// console.log(arrMain);



// 2/ 

const arr = [1,2,3,4,5,6,7,8,9,10];

 function map(arr, callback) {
    let newArr = [];
    forEach(arr, function (el) {
      const isFilterPassed = callback(el);
      if(isFilterPassed) newArr.push(el);
    });
    return newArr;
  }

  const arrMain = map(arr, function(el){
    return el % 2 === 0;
  });

console.log(arrMain);






