// функция duplicateString принимает на вход строку и возвращает её удвоенный вариант. Если строка пустая, то возвращает "String is empty"
// function duplicateString(str) {
// return str ? str+str : "String is empty";
// }

// console.log(duplicateString("aaa")); // "aaaaaa"
// console.log(duplicateString("abcxyz")); // "abcxyzabcxyz"
// console.log(duplicateString("")); // "String is empty"




// функция normalize принимает на вход массив arr и нормализует его, выводя значения в диапозон от -1 до 1
// function normalize(arr) {
//    const sortArr= [...arr].sort((a,b)=>Math.abs(b)- Math.abs(a));
//    return sortArr[0] ? arr.map(el => el / Math.abs(sortArr[0])) : arr;
// }

// console.log(normalize([5, 10, 15])); // [0.33333, 0.66666, 1]
// console.log(normalize([-6, -3, 0, 3])); // [-1, -0.5, 0, 0.5]
// console.log(normalize([100, 1, 0])); // [1, 0.01, 0]
// console.log(normalize([0, 0, 0])); // [0, 0, 0]




// функция maxEvenNumber принимает на вход массив чисел arr и возвращает наибольшее чётное число в массиве
// function maxEvenNumber(arr) {
// return arr.filter(el => el % 2 ===0).sort((a, b)=> b - a)[0]
// }

// console.log(maxEvenNumber([ 0, 10, 11 ])); // 10
// console.log(maxEvenNumber([-2, 0, Math.PI])); // 0
// console.log(maxEvenNumber([])); // undefined



// фунция getRoute принимает на вход три точки a, b, c
// точка - массив из 2 элементов, нулевой элемент массива будем считать х, первый элемент - у
// пример: [ 0.5, 3 ] x = 0.5, y = 3
// задача: вернуть массив из трёх элементов, указывающий в каком порядке надо проходить точки,
// чтобы пройденное расстояние было наименьшим
// function getRoute(a, b, c) {
// const distance = [getDistance(b, c), getDistance(a, c), getDistance(a,b)];
// let index = distance.indexOf(Math.max(...distance));
//  return  [(2 + index)%3, index, (index +1) % 3];
// }

// function getDistance(firstPoint, seccondPoint){
//     result = Math.sqrt((Math.pow(firstPoint[0] - seccondPoint[0], 2)) + (Math.pow(firstPoint[1] - seccondPoint[1], 2)), 2);
//     return  result;
// }

// console.log(getRoute([0, 5], [-1, 0], [1, 4]));


// функция convertToBitwise принимает натуральное число
// и возвращает строку в которой это число представлено
// в двоичном формате


