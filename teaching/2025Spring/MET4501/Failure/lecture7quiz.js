const quizData = [
    {
      question: "1. (of 10) A brittle material has the properties Sut = 210 MPa and Suc = 630 MPa. Using the brittle Coulomb-Mohr (BCM) and modified-Mohr (MM) theories, determine the factor of safety for the following state of plane stress: sigma_x = 175 MPa, sigma_y = 105 MPa",
      options: ["BCM: n = 0.5, MM: n = 2.0", "BCM: n = 1.2, MM: n = 1.2", "BCM: n = 2.0, MM: n = 0.5", "BCM: n = 1.7, MM: n = 1.7"],
      answer: "BCM: n = 1.2, MM: n = 1.2"
    },
    {
      question: "2. (of 10) A brittle material has the properties Sut = 210 MPa and Suc = 630 MPa. Using the brittle Coulomb-Mohr (BCM) and modified-Mohr (MM) theories, determine the factor of safety for the following state of plane stress: sigma_x = 105 MPa, sigma_y = -105 MPa",
      options: ["BCM: n = 1.5, MM: n = 1.5", "BCM: n = 2.0, MM: n = 1.5", "BCM: n = 1.5, MM: n = 2.0", "BCM: n = 2.0, MM: n = 2.0"],
      answer: "BCM: n = 1.5, MM: n = 2.0"
    },
    {
      question: "3. (of 10) A brittle material has the properties Sut = 210 MPa and Suc = 630 MPa. Using the brittle Coulomb-Mohr (BCM) and modified-Mohr (MM) theories, determine the factor of safety for the following state of plane stress: sigma_x = 140 MPa, tau_xy = -70 MPa",
      options: ["BCM: n = 1.2, MM: n = 1.2", "BCM: n = 1.3, MM: n = 1.4", "BCM: n = 2.8, MM: n = 1.7", "BCM: n = 2.2, MM: n = 2.2"],
      answer: "BCM: n = 1.2, MM: n = 1.2"
    },
    {
      question: "4. (of 10) A brittle material has the properties Sut = 210 MPa and Suc = 630 MPa. Using the brittle Coulomb-Mohr (BCM) and modified-Mohr (MM) theories, determine the factor of safety for the following state of plane stress: sigma_x = -105 MPa, sigma_y = 70 MPa, tau_xy = -105 MPa",
      options: ["BCM: n = 0.8, MM: n = 1.1", "BCM: n = 1.6, MM: n = 1.6", "BCM: n = 2.5, MM: n = 2.2", "BCM: n = 1.2, MM: n = 1.6"],
      answer: "BCM: n = 1.2, MM: n = 1.6"
    },
    {
      question: "5. (of 10) A brittle material has the properties Sut = 210 MPa and Suc = 630 MPa. Using the brittle Coulomb-Mohr (BCM) and modified-Mohr (MM) theories, determine the factor of safety for the following state of plane stress: sigma_x = -140 MPa, sigma_y = -140 MPa, tau_xy = -105 MPa",
      options: ["BCM: n = 2.0, MM: n = 2.0", "BCM: n = 1.1, MM: n = 0.7", "BCM: n = 2.6, MM: n = 2.6", "BCM: n = 0.7, MM: n = 1.1"],
      answer: "BCM: n = 2.6, MM: n = 2.6"
    },
    {
      question: "6. (of 10) For brittle materials, failure typically occurs when:",
      options: ["The maximum shear stress reaches a critical value", "The material deforms plastically", "The tensile strength is exceeded", "The von Mises stress reaches a critical value"],
      answer: "The tensile strength is exceeded"
    },
    {
      question: "7. (of 10) Select all failure theories that are applicable for brittle materials under static loading:",
      options: ["Modified Mohr (MM)", "Brittle Coulomb-Mohr (BCM)", "Maximum Normal Stress (MNS)", "Distortion-energy (DE)", "Maximum Shear Stress (MSS)", "Ductile Coulomb-Mohr (DCM)"],
      answer: ["Modified Mohr (MM)", "Brittle Coulomb-Mohr (BCM)", "Maximum Normal Stress (MNS)"],
      multi: true
    },
    {
      question: "8. (of 10) What does Mode I fracture refer to?",
      options: ["Shear sliding", "Out-of-plane tearing", "Tensile opening", "Compression"],
      answer: "Tensile opening"
    },
    {
      question: "9. (of 10) Mode III fracture is best described as:",
      options: ["Tensile crack opening", "In-plane shear", "Out-of-plane shear (tearing)", "Compression failure"],
      answer: "Out-of-plane shear (tearing)"
    },
    {
      question: "10. (of 10) A penny-shaped crack in a rod under uniform tension would most likely fail in which mode?",
      options: ["Mode I", "Mode II", "Mode III","Mixed-mode",],
      answer: "Mode I"
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
