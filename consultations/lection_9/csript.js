const form = document.querySelector('.form');

const products = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const title = event.target.title.value;
    const price = event.target.price.value;

    products.push({ title, price });
    localStorage.setItem('products', JSON.stringify(products));
    event.target.reset();




    console.log(products);
})
