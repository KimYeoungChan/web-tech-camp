//변수
const span = document.querySelector('#totalScore');

let totalScore = 0;
const todoScore = Number(localStorage.getItem('todo'));
const calcScore = Number(localStorage.getItem('calc'));
const birdScore = Number(localStorage.getItem('bird'));

console.log(todoScore)

totalScore = todoScore + calcScore + birdScore;

span.innerHTML = totalScore;

// 랜덤게임 시작하기

// 배열
const links = ['todo.html', 'calc.html', 'bird.html', 'speed.html'];

// 랜덤설정
const randomNum = Math.floor(Math.random() * 4);
console.log(randomNum)

// 함수선언
const startRandomHandler = () => {
  location.href = links[randomNum];
}

// 변수
const startBtn = document.querySelector('#startRandomBtn');
startBtn.addEventListener('click', startRandomHandler);

// toggle 버튼 구현

// 변수
const toggleBtn = document.querySelector('.toggleBtn');
const ul = document.querySelector('ul');

toggleBtn.addEventListener('click', () =>{
  ul.classList.toggle("show"); // show 클래스명 추가
})