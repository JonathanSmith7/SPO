// таймер
var totalTime = 600000; // 10 минут

var timeDisplay = document.getElementById('timeDisplay');

function updateTimer(time) {
    var minutes = Math.floor(time / 60000);
    var seconds = ((time % 60000) / 1000).toFixed(0);
    timeDisplay.textContent = (minutes < 10 ? '0' : '') + minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
}

var timerInterval = setInterval(function() {
    totalTime -= 1000;
    updateTimer(totalTime);

    // Если время истекло
    if (totalTime <= 0) {
        clearInterval(timerInterval);
        document.getElementById("submit").click();
    }
}, 1000);

// тест
document.getElementById("submit").addEventListener("click", function(event) {
  event.preventDefault(); // чтобы форма не отправлялась
  
  var answers = {
    question1: document.querySelector('input[name="question1"]:checked').value,
    question2: document.querySelector('input[name="question2"]:checked').value,
    question3: document.querySelector('input[name="question3"]:checked').value,
    question4: document.querySelector('input[name="question4"]:checked').value,
  };

  // Правильные ответы
  var correctAnswers = {
    question1: "answer3",
    question2: "answer1",
    question3: "answer2",
    question4: "answer3"
  };
 
  var score = 0;
  for (var question in answers) {
    if (answers[question] === correctAnswers[question]) {
      score++;
    }
  }

  // Выводим результат
  var result = "Вы ответили правильно на " + score + " из " + Object.keys(correctAnswers).length + " вопросов.";
  
  localStorage.setItem('result', result)

  window.location.href = 'result.html';
});