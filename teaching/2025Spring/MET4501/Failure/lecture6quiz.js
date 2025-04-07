const quizData = [
    {
      question: "1. (of 10) A material's modulus of elasticity (E) depends on which of the following?",
      options: ["Heat treatment (e.g. annealed, quenched and tempered)", "Processing (e.g., cold-drawn, hot-rolled)", "Alloying", "All of the above", "None of the above"],
      answer: "None of the above"
    },
    {
      question: "2. (of 10)The stress-strain curve for a tensile test is pictured in the figure. Load P is applied to a tensile test specimen. The test specimen's initial cross-sectional area is A0. Which label on the stress-strain curve corresponds with the yield strength (Sy)? Hint: This is the stress at which the material will retain a 0.2% permanent elongation after the load is removed.",
      options: ["A", "B", "C", "D", "E"],
      answer: "C",
      image: "images/Lecture6Quiz_Img1.PNG",
    },
    {
      question: "3. (of 10) Which label on the stress-strain curve corresponds with the ultimate tensile strength (Sut)? Hint: This is the maximum stress the material can withstand.",
      options: ["A", "B", "C", "D", "E"],
      answer: "D",
      image: "images/Lecture6Quiz_Img1.PNG",
    },
    {
      question: "4. (of 10) Which label on the stress-strain curve corresponds with the fracture limit (Sf)? Hint: This is the point at which the material will fracture.",
      options: ["A", "B", "C", "D", "E"],
      answer: "E",
      image: "images/Lecture6Quiz_Img1.PNG",
    },
    {
      question: "5. (of 10) Which label on the stress-strain curve corresponds with the elastic limit (el)? Hint: This is the point at which additional stress causes permanent deformation.",
      options: ["A", "B", "C", "D", "E"],
      answer: "B",
      image: "images/Lecture6Quiz_Img1.PNG",
    },
    {
      question: "6. (of 10) Which label on the stress-strain curve corresponds with the proportional limit (pl)? Hint: This is the point until which Hooke's Law can be applied.",
      options: ["A", "B", "C", "D", "E"],
      answer: "A",
      image: "images/Lecture6Quiz_Img1.PNG",
    },
    {
      question: "7. (of 10) A ductile hot-rolled steel bar has a minimum yield strength in tension and compression of 350 MPa. Using the distortion-energy (DE) and maximum-shear-stress (MSS) theories, determine the factors of safety for the following plane stress states: sigma_x = 100 MPa, sigma_y = 100 MPa",
      options: ["MSS: n = 3.5, DE: n = 3.5", "MSS: n = 3.0, DE: n = 3.5", "MSS: n = 3.5, DE: n = 3.0", "MSS: n = 2.7, DE: n = 4.2"],
      answer: "MSS: n = 3.5, DE: n = 3.5"
    },
    {
      question: "8. (of 10) A ductile hot-rolled steel bar has a minimum yield strength in tension and compression of 350 MPa. Using the distortion-energy (DE) and maximum-shear-stress (MSS) theories, determine the factors of safety for the following plane stress states: sigma_x = 100 MPa, sigma_y = 50 MPa",
      options: ["MSS: n = 2.5, DE: n = 2.0", "MSS: n = 3.5, DE: n = 3.5", "MSS: n = 3.5, DE: n = 4.0", "MSS: n = 2.7, DE: n = 4.5"],
      answer: "MSS: n = 3.5, DE: n = 4.0"
    },
    {
      question: "9. (of 10) A ductile hot-rolled steel bar has a minimum yield strength in tension and compression of 350 MPa. Using the distortion-energy (DE) and maximum-shear-stress (MSS) theories, determine the factors of safety for the following plane stress states: sigma_x = 100 MPa, tau_xy = -75 MPa",
      options: ["MSS: n = 1.0, DE: n = 3.0", "MSS: n = 1.9, DE: n = 2.1", "MSS: n = 2.1, DE: n = 1.9", "MSS: n = 2.5, DE: n = 3.7"],
      answer: "MSS: n = 1.9, DE: n = 2.1"
    },
    {
      question: "10. (of 10) A ductile hot-rolled steel bar has a minimum yield strength in tension and compression of 350 MPa. Using the distortion-energy (DE) and maximum-shear-stress (MSS) theories, determine the factors of safety for the following plane stress states: sigma_x = -50 MPa, sigma_y = -75 MPa, tau_xy = -50 MPa",
      options: ["MSS: n = 1.1, DE: n = 1.5", "MSS: n = 1.5, DE: n = 5.5", "MSS: n = 3.2, DE: n = 3.1", "MSS: n = 3.1, DE: n = 3.2"],
      answer: "MSS: n = 3.1, DE: n = 3.2"
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
