const addScoreHandler = (num) => {
  alert(`참잘했어요 ${num} 점 추가`)
  score += num;
  span.innerHTML = score;
}

const saveScoreHandler = (prop1, prop2) => {
  localStorage.setItem(prop1, prop2)
  alert("저장완료")
}