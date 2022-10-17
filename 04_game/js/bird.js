// 변수
const container = document.querySelector('.sky-wrap');
const contanierField = container.getBoundingClientRect();
const span = document.querySelector('#score-num');
const saveBtn = document.querySelector('#saveScoreBtn');
console.log(contanierField);

let score = 0;
const localScore = Number(localStorage.getItem('bird'));
score += localScore;

const createRandomNum = (min,max) => {
  return `${Math.floor(Math.random() * (max - min)) + min}px`
}

// 함수
const addBirdIcon = () => {
  for(let i=0; i<10; i++) {
    // <img src=''></img>
    const img = document.createElement('img');
    img.setAttribute('class','bird-icon');
    img.setAttribute('src','../images/bird.png');
    img.style.position = 'absolute';
    img.style.width = '100px';

    // 랜덤위치 설정
    img.style.top = createRandomNum(contanierField.top, contanierField.height);
    img.style.left = createRandomNum(contanierField.left, contanierField.width);

    container.appendChild(img);
  }
};

addBirdIcon(10);

const bird = document.querySelectorAll('.bird-icon');
console.log(bird);

const birdClickHandler = (e) => {
  // console.log(e.target);
  e.target.remove();
  addScoreHandler(0.5);
}

const eventHandler = () => {
  for(let i of bird) {
    i.addEventListener('click', birdClickHandler)
  }
}
eventHandler();

saveBtn.addEventListener('click', () => {saveScoreHandler('bird', score)});