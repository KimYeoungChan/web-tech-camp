//.변수
const addBtn = document.querySelector('.addTodoBtn');
const input = document.querySelector('input');
const ul = document.querySelector('#list-box');
const span = document.querySelector('#score-num');
const saveBtn = document.querySelector('#saveScoreBtn');

let score = 0;
const localScore = Number(localStorage.getItem('todo'));
score += localScore;
span.innerHTML = score;


//함수
const addTodoHandler = () => {
    const li = document.createElement('li')
    li.textContent = input.value;
    ul.appendChild(li);
    input.value = '';

    nextStepHandler();
}

const nextStepHandler = () => {
    const lists = document.querySelectorAll('li');
    for(let i=0; i <lists.length; i ++) {
        lists[i].addEventListener('click', function() {
            console.log(this);
            this.parentNode.removeChild(this)
            addScoreHandler(10);
        })
    }
}



addBtn.addEventListener('click', addTodoHandler);
saveBtn.addEventListener('click', () => {saveScoreHandler('todo', score)});