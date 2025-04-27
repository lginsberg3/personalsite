const quizData = [
    {
      question: "1. (of 11) For the spur gearset shown:",
      options: ["The pinion rotates faster than the gear.", "The gear rotates faster than the pinion."],
      answer: "The pinion rotates faster than the gear.",
      image: "images/Lecture23Quiz_Img1.PNG"
    },
    {
      question: "2. (of 11) For the spur gearset shown:",
      options: ["More torque acts on the pinion than on the gear.", "More torque acts on the gear than on the pinion."],
      answer: "More torque acts on the gear than on the pinion.",
      image: "images/Lecture23Quiz_Img1.PNG"
    },
    {
      question: "3. (of 11) Which gear type labeled in the figure is a straight bevel gear?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(F)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "4. (of 11) Which gear type labeled in the figure is a rack?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(D)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "5. (of 11) Which gear type labeled in the figure is a worm wheel?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(A)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "6. (of 11) Which gear type labeled in the figure is a spiral bevel gear?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(G)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "7. (of 11) Which gear type labeled in the figure is a spur gear?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(H)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "8. (of 11) Which gear type labeled in the figure is a helical gear?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(J)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "9. (of 11) Which gear type labeled in the figure is an internal gear?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(E)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "10. (of 11) Which gear type labeled in the figure is a screw gear?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(C)",
      image: "images/Lecture23Quiz_Img2.PNG"
    },
    {
      question: "11. (of 11) Which gear type labeled in the figure is a worm?",
      options: ["(A)", "(B)", "(C)", "(D)", "(E)", "(F)", "(G)", "(H)", "(J)"],
      answer: "(B)",
      image: "images/Lecture23Quiz_Img2.PNG"
    }
  ];
  
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const submitButton = document.getElementById("submit");
const quizElement = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;
let feedback = [];

function showQuestion() {
  const q = quizData[currentQuestion];
  let html = `<h2>${q.question}</h2>`;

  // Show image if it exists
  if (q.image) {
    html += `<img src="${q.image}" alt="Question Image" style="max-width: 400px; margin: 10px 0;">`;
  }

  questionElement.innerHTML = html;
  optionsElement.innerHTML = "";

  if (q.multi) {
    // Show checkboxes
    q.options.forEach(option => {
      const label = document.createElement("label");
      label.style.display = "block";
      label.innerHTML = `
        <input type="checkbox" name="option" value="${option}"> ${option}
      `;
      optionsElement.appendChild(label);
    });
    submitButton.style.display = "inline-block";
  } else {
    // Show buttons
    q.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.addEventListener("click", () => selectAnswer(option));
      optionsElement.appendChild(button);
    });
    submitButton.style.display = "none";
  }
}

function selectAnswer(option) {
  const q = quizData[currentQuestion];
  if (option === q.answer) {
    score++;
    feedback.push(`Question ${currentQuestion + 1}: ✅ Correct!`);
  } else {
    feedback.push(`Question ${currentQuestion + 1}: ❌ Incorrect. Correct answer: "${q.answer}".`);
  }

  currentQuestion++;
  showNext();
}

submitButton.addEventListener("click", () => {
  const selected = Array.from(document.querySelectorAll('input[name="option"]:checked')).map(
    checkbox => checkbox.value
  );
  const q = quizData[currentQuestion];
  const correct = q.answer;

  const isCorrect =
    selected.length === correct.length &&
    selected.every(val => correct.includes(val)) &&
    correct.every(val => selected.includes(val));

  if (isCorrect) {
    score++;
    feedback.push(`Question ${currentQuestion + 1}: ✅ Correct!`);
  } else {
    feedback.push(`Question ${currentQuestion + 1}: ❌ Incorrect. Correct answers: ${correct.join(", ")}.`);
  }

  currentQuestion++;
  showNext();
});

function showNext() {
  if (currentQuestion < quizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  quizElement.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    <h2>Feedback:</h2>
    <ul>${feedback.map(f => `<li>${f}</li>`).join("")}</ul>
  `;
}

showQuestion();
