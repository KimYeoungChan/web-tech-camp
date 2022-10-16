// 변수
const addBtn = document.querySelector('.addTodoBtn');
const input = document.querySelector('input');
const ul = document.querySelector('#list-box');

// 이벤트
const addTodoHandler= () => {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
}

addBtn.addEventListener('click', addTodoHandler);