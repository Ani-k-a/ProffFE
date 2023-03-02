// function power(value, p) {
//     console.log(value**p);
// }


// const check = number => number >= 0;

// console.log(check(-1))
// console.log(check(2))

// const compare = (a, b) => a > b ? a : b

// console.log(compare(-1, 5))
// console.log(compare(2, 1))

// const compare = (start, end) => {
//     let arr = [];
//     for(let i = start; i < end; i++){
//         arr.push(i);
//     }
//     return arr;
// }

// console.log(compare(3, 7))

// const words = ['велосипед', 'ролики', 'самокат', 'лыжи', 'коньки'];

// words.map(el=> el.length);

// console.log(words.map(el=> el.length));



function comp(array1, array2){
  
    for(let el of array1){
      if (!array2.includes(Math.pow(el, 0.5) )){
          return false;}
          
    }
       return true;
    }

    console.log(comp([121, 144, 19, 161, 19, 144, 19, 11], [11*11, 121*121, 144*144, 19*19, 161*161, 19*19, 144*144, 19*19]))