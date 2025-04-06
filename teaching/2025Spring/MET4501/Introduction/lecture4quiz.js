const quizData = [
    {
      question: "1. (of 10) What is the purpose of heat treatments in materials processing?",
      options: ["To change the material's color", "To improve mechanical properties like hardness and strength", "To reduce the material's weight", "To enhance the material's thermal conductivity"],
      answer: "To improve mechanical properties like hardness and strength"
    },
    {
      question: "2. (of 10) For steels, which of the following processes is associated with improving ductility and relieving internal stresses?",
      options: ["Quenching", "Tempering", "Annealing", "Case hardening"],
      answer: "Annealing"
    },
    {
      question: "3. (of 10) Which of the following Ashby charts would be most useful when selecting a material for a lightweight yet strong structure?",
      options: ["strength vs. density", "electrical conductivity vs. cost", "thermal conductivity vs. strength", "fracture toughness vs. stiffness"],
      answer: "strength vs. density"
    },
    {
      question: "4. (of 10) Cold working a metal typically results in which of the following outcomes?",
      options: ["Decreased strength and increased ductility", "Increased strength and decreased ductility", "Increased thermal conductivity", "No change in mechanical properties"],
      answer: "Increased strength and decreased ductility"
    },
    {
      question: "5. (of 10) The primary benefit of using Ashby charts during the materials selection process is:",
      options: ["Visualizing the trade-offs between properties of different materials", "Automatically selecting the cheapest material", "Identifying material suppliers", "Determining the color of the material"],
      answer: "Visualizing the trade-offs between properties of different materials"
    },
    {
      question: "6. (of 10) A material is designated with the UNS number C95400. What type of material is this?",
      options: ["Stainless steel", "Aluminum alloy", "Copper alloy", "Titanium alloy"],
      answer: "Copper alloy"
    },
    {
      question: "7. (of 10) A 100 mm gage length is marked on an aluminum rod. The rod is strained so that the gage marks are 109 mm apart. The strain is most nearly:",
      options: ["0.001", "0.01", "0.1", "1.0"],
      answer: "0.1"
    },
    {
      question: "8. (of 10) A test specimen with a circular cross section has an initial gage length of 500 mm and an initial diameter of 60 mm. The specimen is placed in a tensile test apparatus. When the instantaneous tensile force in the test specimen is 50 kN, the specimen has a longitudinal elongation of 0.16 mm and a lateral decrease in diameter of 0.01505 mm. What is most nearly the modulus of elasticity?",
      options: ["30 GPa", "46 GPa", "55 GPa", "70 GPa"],
      answer: "55 GPa"
    },
    {
      question: "9. (of 10) Given that the Brinell Hardness (HB) of a steel is 200, calculate the approximate ultimate tensile strength of the material.",
      options: ["100,000 psi", "150,000 psi", "200,000 psi", "250,000 psi"],
      answer: "100,000 psi"
    },
    {
      question: "10. (of 10) Which of the following iron-carbon alloys consists of nearly equal amounts of pearlite and ferrite when cooled at a slow rate from 1,800 degrees F to room temperature?",
      options: ["Class 40 grey cast iron", "AISI 304", "AISI 1040", "AISI 1095"],
      answer: "AISI 1040",
      image: "Lecture4QuizImage.PNG"
    },
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
