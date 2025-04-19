const quizData = [
    {
      question: "1. (of 9) Two designs are being considered for a rotating shaft that will support a transverse load. Shaft design A is twice the length of shaft design B. Which shaft design will have the smaller deflection?",
      options: ["Design A", "Design B"],
      answer: "Design B"
    },
    {
      question: "2. (of 9) Two designs are being considered for a rotating shaft that will support a transverse load. Shaft design A is twice the length of shaft design B. Which shaft design will have the smaller stress?",
      options: ["Design A", "Design B"],
      answer: "Design B"
    },
    {
      question: "3. (of 9) For the same load, the same cross-section, and the same length, which beam design will have the larger deflection?",
      options: ["A simply-supported (straddle mounted) beam", "A cantilever beam"],
      answer: "A cantilever beam"
    },
    {
      question: "4. (of 9) A shaft is to be designed where the primary concern is to minimize deflection. (Minimizing cost is also a consideration.) Which steel should be used?",
      options: ["A low carbon steel", "A high carbon steel"],
      answer: "A low carbon steel"
    },
    {
      question: "5. (of 9) The table below summarizes safety factors for three different designs. Which of these designs is most appropriate?",
      options: ["Design A", "Design B", "Design C"],
      answer: "Design A",
      image: "images/Lecture16Quiz_Img1.PNG"
    },
    {
      question: "6. (of 9) When using oversized (positively toleranced) keys, the engineer needs to be concerned with backlash when torque loads cycle between -10 N-m to 50 N-m.",
      options: ["True", "False"],
      answer: "True"
    },
    {
      question: "7. (of 9) Which of the following are failure modes of a typical steel key? Select all that apply.",
      options: ["The key is sheared across its width", "The key is crushed by the force from the keyseat/keyway", "The key is elongated by high torque loads leading to high tensile stresses", "The key melts due to excessive friction during normal operation"],
      answer: ["The key is sheared across its width", "The key is crushed by the force from the keyseat/keyway"],
      multi: true
    },
    {
      question: "8. (of 9) Consider a keyed shaft subjected to cyclic torques that alternate between positive and negative values. To determine the factor of safety for infinite life of the shaft, which of the following steps is NOT involved?",
      options: ["Calculate the mean and alternating stresses based on the applied torque", "Determine the stress concentration factor caused by the keyway/keyseat and apply it to the nominal stress","Adjust the endurance limit using Marin factors","Use the ultimate strength of the key material to calculate the alternating stress","Apply a fatigue failure criterion, such as the Goodman line, to account for both mean and alternating stresses"],
      answer: "Use the ultimate strength of the key material to calculate the alternating stress"
    },
    {
      question: "9. (of 9) What is the overall factor of safety for a square key given the following conditions: Applied torque = 100 N-m, Shaft radius = 250 mm, Key width = 100 mm, Key length = 250 mm, Material yield strength (in tension and compression) = 40 kPa",
      options: ["1.3", "2.5","1.7","5.0"],
      answer: "1.3"
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
