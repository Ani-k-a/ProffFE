
// function findNumberFibonache(n){
// let arr = [];
// let number;
// for(let i = 0; i < n; i++) {
//     number = i > 1 ? arr[i-2]+ arr[i-1] : 1;
//     arr.push(number);  
// }
// return arr[n-1];
// }


function createEmptyArr(length = 0) {
    const result = [];
    for (let i = 0; i < length; i++) {
        result.push(undefined)
    }
    return result;
}

const fibonacci = (n) =>
    createEmptyArr(n + 1)
        .map((el, index) => index)
        .reduce(
            (result, current, index) =>
                result.push(index < 2 ? current : result[index - 1] + current[index - 2]) && result,
        [])[n - 1];
    

console.log(fibonacci(1))
console.log(fibonacci(2))
console.log(fibonacci(3))
console.log(fibonacci(4))
console.log(fibonacci(5))
console.log(fibonacci(6))
console.log(fibonacci(7))