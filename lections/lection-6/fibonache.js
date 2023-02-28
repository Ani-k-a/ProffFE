
function findNumberFibonache(n){
let arr = [];
let number;
for(let i = 0; i < n; i++) {
    if (i > 1){number = arr[i-2]+ arr[i-1];

    } else {number = 1;}
    
    arr.push(number);
    
}

return arr.find((el, ind) => ind === (n-1));
}

// findNumberFibonache(index);
console.log(findNumberFibonache(1))
console.log(findNumberFibonache(2))
console.log(findNumberFibonache(3))
console.log(findNumberFibonache(4))
console.log(findNumberFibonache(5))