const quizData = [
    {
      question: "What is the capital of India?",
      choices: ["Delhi", "Kolkata", "Mumbai", "Bengaluru"],
      correctAnswer: "Delhi"
    },
    {
      question: "Which planet is known as the Red Planet?",
      choices: ["Earth", "Mars", "Jupiter", "Saturn"],
      correctAnswer: "Mars"
    },
    {
      question: "What is the largest mammal in the world?",
      choices: ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
      correctAnswer: "Blue Whale"
    },
    {
      question: "How many horns does a horse have?",
      choices: ["2", "1", "0", "3"],
      correctAnswer: "0"
    },
    {
      question: "Which number is not a prime number?",
      choices: ["1", "2", "3", "5"],
      correctAnswer: "1"
    },
    {
      question: "What's the name of a place you go to see lots of animals?",
      choices: ["Forest", "Field", "Zoo", "Ocean"],
      correctAnswer: "Zoo"
    },
    {
      question: "How many planets are in our solar system?",
      choices: ["8", "9", "7", "10"],
      correctAnswer: "8"
    },
    {
      question: "What is the color of a school bus?",
      choices: ["Yellow", "Blue", "White", "Red"],
      correctAnswer: "Yellow"
    },
    {
      question: "What do you use to write on a blackboard?",
      choices: ["Chalk", "Pen", "Pencil", "Duster"],
      correctAnswer: "Chalk"
    },
    {
      question: "Where is the Great Pyramid of Giza?",
      choices: ["Egypt", "Delhi", "UAE", "Croatia"],
      correctAnswer: "Egypt"
    },
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  const questionElement = document.getElementById("question");
  const choicesElement = document.getElementById("choices");
  const scoreElement = document.getElementById("score-value");
  
  function loadQuestion() {
    const currentQuizData = quizData[currentQuestion];
  
    questionElement.innerText = currentQuizData.question;
    choicesElement.innerHTML = "";
  
    currentQuizData.choices.forEach((choice, index) => {
      const choiceElement = document.createElement("label");
      choiceElement.innerHTML = `<input type="radio" name="choice" value="${choice}"> ${choice}`;
      choicesElement.appendChild(choiceElement);
    });
  }
  
  function submitAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
  
    if (!selectedChoice) {
      alert("Please select an answer!");
      return;
    }
  
    const answer = selectedChoice.value;
    const currentQuizData = quizData[currentQuestion];
  
    if (answer === currentQuizData.correctAnswer) {
      score++;
    }
  
    currentQuestion++;
  
    if (currentQuestion < quizData.length) {
      loadQuestion();
    } else {
      showResults();
    }
  }
  
  function showResults() {
    const totalQuestions = quizData.length;
    const scoreText = `${score}/${totalQuestions}`;
  
    questionElement.innerText = "Quiz Completed!";
    choicesElement.innerHTML = "";
    document.getElementById("submit").disabled = true;
    scoreElement.innerText = scoreText;
    document.getElementById("score").style.display = "block"; // Show the score
  }
  
  loadQuestion();
  
  
  