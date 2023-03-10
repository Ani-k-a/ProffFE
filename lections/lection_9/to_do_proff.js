const createToDoEntity = (text, deadline) => ({
    text,
    deadline,
    isCompleted: false,
});

const button = document.querySelector('input[type="button"]');
const newToDoInput = document.querySelector('input[type="text"]');
const newToDoDeadline = document.querySelector('input[type="date"]');
const sortIncreaseBtn = document.querySelector('.sort-incr-btn');
const sortDecreaseBtn = document.querySelector('.sort-decr-btn');
const list = document.querySelector('#list');
const container = document.querySelector('.container');
const buttonDellSelected = document.querySelector('.del-selected-btn');

datePickerId.min = new Date().toISOString().split("T")[0]; // add min current time in deadline timer

// console.log(newToDoDeadline)

const arr = localStorage.getItem('toDo') ? JSON.parse(localStorage.getItem('toDo')) : [];


const createToDoEl = (toDoEntity) => {

    const newToDoContainer = document.createElement('label');
    const newToDoValue = document.createElement('input');
    const paragraf = document.createElement('p');
    const newToDoDeadline = document.createElement('time');
    const button = document.createElement('button');

    newToDoContainer.setAttribute('class', "list-item");
    newToDoValue.setAttribute('type', "checkbox");
    newToDoValue.checked = toDoEntity.isCompleted;
    paragraf.innerText = toDoEntity.text;
    newToDoDeadline.innerText = toDoEntity.deadline;
    button.setAttribute('class', 'del-item fa-solid fa-xmark');
   
    newToDoContainer.append(newToDoValue, paragraf, newToDoDeadline, button);

    const handeButtonDelClick = () => {
        newToDoContainer.remove();
        const index = arr.indexOf(toDoEntity);
        index !== -1 && arr.splice(index, 1);
        localStorage.setItem('toDo', JSON.stringify(arr));
    }

    button.addEventListener('click', handeButtonDelClick);

    const handleChange = () => {
        toDoEntity.isCompleted = !toDoEntity.isCompleted;
        localStorage.setItem('toDo', JSON.stringify(arr));
    }
    newToDoValue.addEventListener('change', handleChange)

    return newToDoContainer;
}

// add new task

function handleTaskAdd() {
    if (newToDoInput.value&&newToDoDeadline.value) {
        const toDoEntity = createToDoEntity(newToDoInput.value, newToDoDeadline.value);
        arr.push(toDoEntity);
        list.append(createToDoEl(toDoEntity));
        localStorage.setItem('toDo', JSON.stringify(arr));
        newToDoInput.value = '';
    }
}

button.addEventListener('click', handleTaskAdd)


list.append(...arr.map(createToDoEl))


// add button delete all

function addButtonDellAll() {
    const btnDellAll = document.createElement('button');
    btnDellAll.innerText = "Delete all";
    btnDellAll.setAttribute('class', 'button-delAll');
    container.append(btnDellAll);
}
addButtonDellAll();

const btnDellAll = document.querySelector('.button-delAll');

btnDellAll.addEventListener('click', () => {
    localStorage.removeItem('toDo');
    list.replaceChildren();
    arr.splice(0, arr.length);
})

//add increase and decrease sort

sortIncreaseBtn.addEventListener('click', () => {
    
    arr.sort((a, b) => a.deadline.localeCompare(b.deadline));
    list.replaceChildren();
    list.append(...arr.map(createToDoEl));
})

sortDecreaseBtn.addEventListener('click', () => {
    arr.sort((a, b) => b.deadline.localeCompare(a.deadline));
    list.replaceChildren();
    list.append(...arr.map(createToDoEl));

})

// button delate selected items

buttonDellSelected.addEventListener('click', ()=>{

    const sortArr = arr.filter(({isCompleted}) => !isCompleted);
    arr.splice(0, arr.length)
    sortArr.forEach(el => arr.push(el));
    list.replaceChildren();
    list.append(...arr.map(createToDoEl));
   
    localStorage.setItem('toDo', JSON.stringify(arr));
})



// добавить дедлайны
// сделать кнопки сортировки по дедлайну
//реализовать кнопку, которая закрывает выполненные туду