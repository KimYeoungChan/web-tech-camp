// 변수
const h1 = document.querySelector('h1');
const submitBtn = document.querySelector('#submitBtn');
// const submitBtn = document.getElementById('submitBtn');
const input = document.querySelector('input');
const localScore = Number(localStorage.getItem('calc'));
const span = document.querySelector('#score-num');
const saveBtn = document.querySelector('#saveScoreBtn');

let score = 0;
score += localScore;

let num1;
let num2;

// 함수
const initRandomNum = () => {
  num1 = Math.floor(Math.random()*10);
  num2 = Math.floor(Math.random()*10);
  h1.innerHTML = `${num1} x ${num2} =?`
}
initRandomNum();


const multipleHandler = () => {
  const answer = num1 * num2;
  console.log(answer);
  console.log(input.value);


  if(answer === Number(input.value) ) {
    input.value = '';
    initRandomNum();
    addScoreHandler(5)
  } else {
    alert("땡")
  }
}

submitBtn.addEventListener('click',multipleHandler);
saveBtn.addEventListener('click',()=> {saveScoreHandler('calc', score)})
