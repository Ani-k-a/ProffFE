// MODEL

const store = [];

function  createNewItem(title) {
    store.push({
        title,
        isChecked: false
    })
    onChange();
}

function setIsChecked (isChecked, ind){
    store[ind].isChecked = isChecked;
    onChange();
}

//VIEV

function draw() {
    const html = [];
    store.forEach(function(item) {
        const label = document.createElement('label');

        const checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.checked = item.isChecked;
        checkbox.addEventListener('change', function (){
            onCheckboxChanged();
        })

        const text = document.createElement('span');
        text.innerHTML = item.text;

        label.append(checkbox, text);

        html.push(label);

    })
    const form = document.createElement("div");

    const input = document.createElement("input");
    input.placeholder = "Введите текст";

    const button = document.createElement("button");
    button.innerHTML = "Создать новый элемент";

    form.append(input, button);

    html.push(form);
    
    const container = document.getElemintById('container');
    container.innerHTML = '';
    html.forEach(function(htmlItem) {
    container.append(htmlItem);
    })
}

// controller

function onChange(){
    draw();
};

function onCheckboxChanged(ind) {
    setIsChecked(!store[ind].isChecked, ind);
}

function onButtonClicked(inputValue) {
    createNewItem(inputValue);
}