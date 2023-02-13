function highAndLow(numbers){
  // console.log(numbers.split(''))
   const arr = numbers.split(' ').map(el => Number(el)).sort((el1, el2) => el1-el2)
   return `${arr[arr.length-1]} ${arr[0]}`
}

console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));