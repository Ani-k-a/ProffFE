// Exercise 1

// const arr = [12, 4, 3, 6, 43, 12, 4, 3];

// arr.forEach(function (element) {
//     if (element >0) {console.log(element)}
// });

// arr.forEach(element => {
//     if (element > 0) console.log(element);
// });

// arr.forEach(element => {
//     if (element %2 === 0) console.log(element);
// });


// Exercise 2

const products = [
    {id: 1, title: 'велосипед', price: 12000, discount: 15},
    {id: 2, title: 'ролики', price: 700, discount: 25},
    {id: 3, title: 'самокат', price: 500, discount: 0},
    {id: 4, title: 'лыжи', price: 1300, discount: 5},
    {id: 5, title: 'сноуборд', price: 2000, discount: 0},
    {id: 6, title: 'коньки', price: 1700, discount: 10}
];

// products.forEach(({title}) => console.log(title));

// products.forEach(({title, discount}) => {if (discount === 0) console.log(title)});

// const prices = products.map(({price}) => price);


// const products = [
//     {title: 'велосипед', price: 12000},
//     {title: 'ролики', price: 700},
//     {title: 'самокат', price: 500},
//     {title: 'лыжи', price: 1300},
//     {title: 'сноуборд', price: 2000},
//     {title: 'коньки', price: 1700}
// ];

const prices = products.map(({title, price}) => {return {title, price}});

console.log(prices);





// Exercise 3

// function handler() {
//     console.log('hello');
// }

// const handler = function () {
//     console.log('hello');
// }

// setInterval(handler, 1000);

// setInterval(function () {
//     console.log('hello');
// }, 5000);