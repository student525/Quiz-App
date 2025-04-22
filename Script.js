const questions = [
    {
      question: "What does HTML stand for?",
      answers: [
        "Hyper Text Markup Language",
        "Home Tool Markup Language",
        "Hyperlinks and Text Markup Language",
        "Hyper Tool Multi Language"
      ],
      correct: 0
    },
    {
      question: "What does CSS stand for?",
      answers: [
        "Creative Style Sheets",
        "Cascading Style Sheets",
        "Computer Style Sheets",
        "Colorful Style Sheets"
      ],
      correct: 1
    },
    {
      question: "What does JS stand for?",
      answers: [
        "JavaSuper",
        "JavaStarter",
        "JavaScript",
        "JustScript"
      ],
      correct: 2
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionEl = document.getElementById("question");
  const options = document.querySelectorAll(".option");
  const scoreEl = document.getElementById("score");
  
  function loadQuestion() {
    resetOptions();
    const q = questions[currentQuestion];
    questionEl.textContent = q.question;
    options.forEach((btn, i) => {
      btn.textContent = q.answers[i];
    });
  }
  
  function resetOptions() {
    options.forEach(btn => {
      btn.classList.remove("selected");
      btn.disabled = false;
    });
  }
  
  function selectAnswer(button) {
    resetOptions();
    button.classList.add("selected");
    const selectedIndex = Array.from(options).indexOf(button);
    if (selectedIndex === questions[currentQuestion].correct) {
      score++;
    }
    options.forEach(btn => btn.disabled = true);
  }
  
  function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
      loadQuestion();
    } else {
      showScore();
    }
  }
  
  function showScore() {
    document.getElementById("quiz").innerHTML = `
      <h2>Your Score: ${score}/${questions.length}</h2>
      <button onclick="location.reload()">Play Again</button>
    `;
  }
  
  // Initialize quiz
  loadQuestion();
  