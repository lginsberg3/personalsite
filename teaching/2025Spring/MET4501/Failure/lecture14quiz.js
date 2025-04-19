const quizData = [
    {
      question: "1. (of 10) In the Goodman criterion, the factor of safety in fatigue is calculated using which combination of applied stresses?",
      options: ["Ultimate stress and alternating stress", "Alternating stress and mean stress", "Yield stress and alternating stress", "Alternating stress and fully reversed stress"],
      answer: "Alternating stress and mean stress"
    },
    {
      question: "2. (of 10) The Morrow criterion is less conservative than the Goodman criterion because the Morrow criterion:",
      options: ["Replaces the ultimate strength with the true fracture strength", "Replaces the alternating stress with the mean stress", "Considers compressive loads more effectively", "Ignores the impact of mean stress altogether"],
      answer: "Replaces the ultimate strength with the true fracture strength",
    },
    {
      question: "3. (of 10) The Goodman criterion is typically used for:",
      options: ["Low-cycle fatigue with plastic deformation", "Ductile materials under static loading", "High-cycle fatigue when the mean stress is significant", "Fatigue failure at elevated temperatures"],
      answer: "High-cycle fatigue when the mean stress is significant"
    },
    {
      question: "4. (of 10) In a fatigue analysis using the Goodman criterion, what does the point where the Goodman line intersects the mean stress axis represent?",
      options: ["Yield strength of the material", "Ultimate tensile strength", "Endurance limit", "Fully reversed loading condition"],
      answer: "Ultimate tensile strength"
    },
    {
      question: "5. (of 10) The Morrow criterion accounts for:",
      options: ["The material's sensitivity to temperature during fatigue loading", "The effect of mean stress and strain hardening behavior", "Only the fully reversed loading conditions", "The ultimate tensile strength without considering mean stress"],
      answer: "The effect of mean stress and strain hardening behavior"
    },
    {
      question: "6. (of 10) In a completely reversed loading condition (mean stress = 0), the Goodman and Morrow criteria predict fatigue failure based on:",
      options: ["Alternating stress and endurance limit", "The yield strength and maximum applied stress only", "The mean stress only"],
      answer: "Alternating stress and endurance limit"
    },
    {
      question: "7. (of 10) In fatigue analysis for combined loading modes (e.g., bending and torsion), the Goodman criterion:",
      options: ["Assumes combined stress is equivalent to fully reversed axial stress", "Ignores the impact of mean stress and focuses solely on alternating stress", "Uses the von Mises stress to account for combined loading", "Assumes the material behaves identically in torsion and bending"],
      answer: "Uses the von Mises stress to account for combined loading"
    },
    {
      question: "8. (of 10) The primary limitation of the Goodman criterion is that it:",
      options: ["Only applies to brittle materials", "Does not account for the plastic deformation that occurs at high mean stress", "Cannot be used for fluctuating loads", "Considers mean stress but ignores ultimate tensile strength"],
      answer: "Does not account for the plastic deformation that occurs at high mean stress"
    },
    {
      question: "9. (of 10) The Goodman line in fatigue analysis assumes that:",
      options: ["Fatigue life is independent of the mean stress.", "The material can endure alternating stresses indefinitely.", "The alternating stress is proportional to the ultimate tensile strength.", "Mean stress contributes to failure, and higher mean stresses reduce fatigue life."],
      answer: "Mean stress contributes to failure, and higher mean stresses reduce fatigue life."
    },
    {
      question: "10. (of 10) The stepped shaft shown rotates at a constant speed. What is the stress concentration factor, Kt, at the location where load F is applied?",
      options: ["1", "1.7", "1.75", "2.2"],
      answer: "1",
      image: "images/Lecture14Quiz_Img1.PNG"
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
