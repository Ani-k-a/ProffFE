const button = document.querySelector('input[type="button"]');
const newToDoInput = document.querySelector('input[type="text"]');
const list = document.querySelector('#list')
const container = document.querySelector('.container');

const arr = localStorage.getItem('toDo') ? localStorage.getItem('toDo').split(",") : [];

const createToDo = (text) => {
    const newToDoContainer = document.createElement('label');
    newToDoContainer.setAttribute('class', "list-item");
    const newToDoValue = document.createElement('input');
    const paragraf = document.createElement('p');
    const button = document.createElement('button');

    newToDoValue.setAttribute('type', "checkbox")
    paragraf.innerText = text;
    button.setAttribute('class', 'del-item fa-solid fa-xmark');
    button.setAttribute('id', arr.length)
    newToDoContainer.append(newToDoValue, paragraf, button);
    
    return newToDoContainer;
}

function handleTaskAdd() {
    if(newToDoInput.value){
        list.append(createToDo(newToDoInput.value));
    arr.push(newToDoInput.value);
    localStorage.setItem('toDo', arr.join(','));
    newToDoInput.value = '';
}    
}

button.addEventListener('click', handleTaskAdd)

// arr.map(createToDo).forEach(el=> list.append(el));
list.append(...arr.map(createToDo))

function addButtonDellAll() {
    const btnDellAll = document.createElement('button');
    btnDellAll.innerText = "Delete all";
    btnDellAll.setAttribute('class', 'button-delAll');
    container.append(btnDellAll);
}

addButtonDellAll();

const btnDellAll = document.querySelector('.button-delAll');

btnDellAll.addEventListener('click', ()=> {
    localStorage.clear();
    list.replaceChildren();
    
})

list.addEventListener('click', handeButtonDelClick);

function handeButtonDelClick (event){
    event.preventDefault();
    if (event.target.nodeName !== "BUTTON") {
        return;
    }
    console.dir(event.target.id);


    
    localStorage.getItem('toDo').split(',').splice(Number(event.target.id)-1, 1).join('');
    console.log(localStorage.getItem('toDo').split(','))

}




/*
1. прокомментировать
2. добавьте удаление всех элементов одной кнопкой (добавить ее в разметку "Очистить")
3. добавить к каждому элементу кнопку "удалить", которая удаляет элемент
4.** сохранять состояние чекбоксов (JSON.stringify, JSON.parse)
*/