const quizData = [
    {
      question: "1. (of 10) What is the primary function of lubrication in journal bearings?",
      options: ["Decrease load capacity", "Minimize friction and wear","Increase operating temperature","Reduce noise"],
      answer: "Minimize friction and wear"
    },
    {
      question: "2. (of 10) Which of the following is a benefit of using journal bearings over rolling-element bearings?",
      options: ["Lower friction at low speeds", "Higher load-carrying capacity","Improved temperature tolerance","Easier installation"],
      answer: "Higher load-carrying capacity"
    },
    {
      question: "3. (of 10) Which of the following regimes of lubrication applies when a full oil film separates the journal and bearing?",
      options: ["Boundary lubrication", "Mixed lubrication","Hydrodynamic lubrication"],
      answer: "Hydrodynamic lubrication"
    },
    {
      question: "4. (of 10) The Sommerfeld number is used to predict which of the following in journal bearings?",
      options: ["Heat generation rate", "Wear rate of bearing surfaces", "Coefficient of friction and film thickness", "Failure threshold for high-speed applications"],
      answer: "Coefficient of friction and film thickness"
    },
    {
      question: "5. (of 10) Which of the following is a typical example of a dependent variable in the design of journal bearings?",
      options: ["Viscosity of oil", "Nominal bearing pressure","Speed of rotation","Flow rate of oil"],
      answer: "Flow rate of oil"
    },
    {
      question: "6. (of 10) We are analyzing a journal bearing with the following properties: (i) the lubricant is SAE 40, (ii) the operating temperature is 65 degrees Fahrenheit, (iii) the speed of rotation is 900 rpm, (iv) the load on the bearing is 540 lbf, (v) the radius of the journal is 3/4 inch, (vi) the clearance between the journal and the bushing is 0.0015in, (vii) the length of the bearing is 1.5 inch. What, most nearly, is the dynamic viscosity of the lubricant?",
      options: ["10 ureyn", "100 ureyn", "200 ureyn", "500 ureyn"],
      answer: "100 ureyn",
      image: "images/Lecture21Quiz_Img1.PNG"
    },
    {
      question: "7. (of 10) Most nearly, what is the nominal bearing pressure (in the projected area of the journal)?",
      options: ["54 psi", "105 psi", "240 psi", "480 psi"],
      answer: "240 psi"
    },
    {
      question: "8. (of 10) Most nearly, what is the bearing characteristic number (Sommerfeld number)?",
      options: ["0.14", "0.55", "1.28", "1.56"],
      answer: "1.56"
    },
    {
      question: "9. (of 10) Most nearly, what is the minimum film thickness (h0) in the bearing?",
      options: ["0.91 in", "0.0014 in", "0.0055 in", "0.038 in"],
      answer: "0.0014 in",
      image: "images/Lecture21Quiz_Img2.PNG"
    },
    {
      question: "10. (of 10) Most nearly, what is the eccentricity (e) of the bearing?",
      options: ["0.00014 in", "0.09 in", "0.022 in", "0.001 in"],
      answer: "0.00014 in",
      image: "images/Lecture21Quiz_Img2.PNG"
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
