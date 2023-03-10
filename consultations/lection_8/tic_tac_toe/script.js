// <Model> 
const store = {
    currentTurn: 0,
    field: [2, 2, 2, 2, 2, 2, 2, 2, 2]
};

function changeCurrentTurn(value) {
    store.currentTurn = value;
    onchange();
}
function markFieldItem(ind, value) {
    store.field[ind] = value;
    onchange();
}

// <View>
function draw() {
    const html = [];

    const title = document.createElement("div");
    title.innerHTML = store.currentTurn === 0 ? "Сейчас ходят нолики" : "Сейчас ходят крестики";
    html.push(title);

    const grid = document.createElement('div');
    grid.classList.add('grid');

    for (let i = 0; i < 9; i++) {
        const item = document.createElement('div');
        item.classList = 'item';
        item.innerHTML = store.field[i] === 0 ? "0" : store.field[i] === 1 ? "X" : "";
        grid.append(item);
        item.addEventListener('click', ()=> {
            if(store.field[i] === 2){
                onItemClick(i);
            }
        })
    }

    html.push(grid);
    const container = document.querySelector("#container");
    container.innerHTML ='';
    html.forEach(function (item) {
        container.append(item);
    });

}

// <Controller>
function onchange(){
    draw();
}

const onItemClick = (ind) => {
    markFieldItem(ind, store.currentTurn);
    changeCurrentTurn(store.currentTurn === 0? 1 : 0);
}
// </Controller>

draw();