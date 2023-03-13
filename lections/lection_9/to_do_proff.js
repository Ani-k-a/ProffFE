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
const buttonHideDoneTasks = document.querySelector('.del-selected-btn');

datePickerId.min = new Date().toISOString().split("T")[0]; // add min current time in deadline timer

const arr = localStorage.getItem('toDo') ? JSON.parse(localStorage.getItem('toDo')) : [];

//save value of inputs
const form = document.querySelector('.form-add');

const date = {
    task: '',
    date: ''
}

date.task = localStorage.getItem('dateForm') ? JSON.parse(localStorage.getItem('dateForm')).task : '';
date.date = localStorage.getItem('dateForm') ? JSON.parse(localStorage.getItem('dateForm')).date : '';

form.addEventListener('input', () => {
    date.task = newToDoInput.value;
    date.date = newToDoDeadline.value;
    localStorage.setItem('dateForm', JSON.stringify(date));
}); //  needs lodash and throttle

newToDoInput.value = date.task;
newToDoDeadline.value = date.date;

//save sort btn
  const sortButtons = {
    increaseBtn: '',
    decreaseBtn: ''
  }

sortButtons.increaseBtn = localStorage.getItem('sortButtons') ? JSON.parse(localStorage.getItem('sortButtons')).increaseBtn : '';
sortButtons.decreaseBtn = localStorage.getItem('sortButtons') ? JSON.parse(localStorage.getItem('sortButtons')).decreaseBtn : '';

  if (localStorage.getItem('sortButtons') !== null) {
    sortIncreaseBtn.classList.remove();
    sortDecreaseBtn.classList.remove();

    if (sortButtons.increaseBtn !== ''){
    sortIncreaseBtn.classList.add(sortButtons.increaseBtn);}

    if(sortButtons.decreaseBtn !== ''){sortDecreaseBtn.classList.add(sortButtons.decreaseBtn)}
}

//  //save filter btn

if (localStorage.getItem('filterButton') !== null) {
    const newArr = JSON.parse(localStorage.getItem('filterButton'));
    buttonHideDoneTasks.classList.remove();
    buttonHideDoneTasks.classList.add(...Object.values(newArr))
}

//create element
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
    if (newToDoInput.value && newToDoDeadline.value) {
        const toDoEntity = createToDoEntity(newToDoInput.value, newToDoDeadline.value);
        arr.push(toDoEntity);
        list.append(createToDoEl(toDoEntity));
        localStorage.setItem('toDo', JSON.stringify(arr));
        localStorage.removeItem('dateForm');
        newToDoInput.value = '';
        newToDoDeadline.value = '';

    }
    else alert('Please, complete all fields')
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
    if (!sortIncreaseBtn.classList.contains('active') && !sortDecreaseBtn.classList.contains('active')) {
        sortIncreaseBtn.classList.add('active');
        sortDecreaseBtn.disablet = true;
        const sortArr = arr.map(el => el).sort((a, b) => a.deadline.localeCompare(b.deadline));
        list.replaceChildren();
        list.append(...sortArr.map(createToDoEl));
        

        sortButtons.increaseBtn = 'active';
        sortButtons.decreaseBtn = '';
        localStorage.setItem('sortButtons', JSON.stringify(sortButtons));
    }

    else if (!sortIncreaseBtn.disablet) {
        sortIncreaseBtn.classList.remove('active');
        sortDecreaseBtn.disablet = false;
        list.replaceChildren();
        list.append(...arr.map(createToDoEl));
        console.log(arr);

        sortButtons.increaseBtn = '';
        sortButtons.decreaseBtn = '';
        localStorage.setItem('sortButtons', JSON.stringify(sortButtons));
    }
})

sortDecreaseBtn.addEventListener('click', () => {
    if (!sortIncreaseBtn.classList.contains('active') && !sortDecreaseBtn.classList.contains('active')) {
        sortDecreaseBtn.classList.add('active');
        sortIncreaseBtn.disablet = true;

        const sortArr = arr.map(el => el).sort((a, b) => b.deadline.localeCompare(a.deadline));
        list.replaceChildren();
        list.append(...sortArr.map(createToDoEl));

        sortButtons.increaseBtn = '';
        sortButtons.decreaseBtn = 'active';
        localStorage.setItem('sortButtons', JSON.stringify(sortButtons));
    }

    else if (!sortDecreaseBtn.disablet) {
        sortDecreaseBtn.classList.remove('active');
        sortIncreaseBtn.disablet = false;
        list.replaceChildren();
        list.append(...arr.map(createToDoEl));
        
        sortButtons.increaseBtn = '';
        sortButtons.decreaseBtn = '';
        localStorage.setItem('sortButtons', JSON.stringify(sortButtons));
    }
})

// button hide selected items

buttonHideDoneTasks.addEventListener('click', () => {
    if (!buttonHideDoneTasks.classList.contains('active')) {

        buttonHideDoneTasks.classList.add('active');
        buttonHideDoneTasks.innerHTML = "Show all tasks";
        const sortArr = arr.filter(({ isCompleted }) => !isCompleted);

        arr.splice(0, arr.length)
        sortArr.forEach(el => arr.push(el));
        list.replaceChildren();
        list.append(...arr.map(createToDoEl));

        localStorage.setItem('filterButton', JSON.stringify(buttonHideDoneTasks.classList));


    }
    else {
        buttonHideDoneTasks.classList.remove('active');
        buttonHideDoneTasks.innerHTML = "Hide done tasks";

        arr.splice(0, arr.length)
        const fullArr = JSON.parse(localStorage.getItem('toDo'));
        fullArr.forEach(el => arr.push(el));
        list.replaceChildren();
        list.append(...arr.map(createToDoEl));

        localStorage.setItem('filterButton', JSON.stringify(buttonHideDoneTasks.classList));

    }

})





// добавить дедлайны
// сделать кнопки сортировки по дедлайну
//реализовать кнопку, которая закрывает выполненные туду