const highScoresList = document.getElementById("highScoresList");
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
var index=0;

highScoresList.innerHTML = highScores
  .map(score => {
    console.log(score);
    return `<div class="main-box">
    <div class="high-score">${++index} </div>
    <div class="high-score">${score.score}</div>
    <div class="high-score name">${score.name}</div>
    </div>`;
  })
  .join("");