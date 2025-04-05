const quizData = [
    {
      question: "All questions in this section refer to the below image of a cantilevered bracket. It is acted on by a 200 N force in the +y direction at location E and a 300 N force in the +x direction at location C. The internal loads acting in segment CD are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: ["Bending", "Transverse Shear"],
      image: "images/Lecture2Quiz_Img1.PNG",
      multi: true
    },
    {
      question: "The internal loads acting in segment CD are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: ["Axial","Bending"],
      image: "images/Lecture2Quiz_Img1.PNG",
      multi: true
    },
    {
      question: "The internal loads acting in segment BE are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: ["Bending", "Transverse Shear"],
      image: "images/Lecture2Quiz_Img1.PNG",
      multi: true
    },
    {
      question: "The internal loads acting in segment AB are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      image: "images/Lecture2Quiz_Img1.PNG",
      multi: true
    },
    {
      question: "All questions in this section refer to the below image of a cantilevered bracket. It is acted on by loads at locations B, C, and D. The internal loads acting in segment BC are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: "Axial",
      image: "images/Lecture2Quiz_Img2.PNG",
      multi: true
    },
    {
      question: "The internal loads acting in segment BD are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: ["Bending", "Transverse Shear"],
      image: "images/Lecture2Quiz_Img2.PNG",
      multi: true
    },
    {
      question: "The internal loads acting in segment AB are (select all that apply):",
      options: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      answer: ["Axial", "Torsion", "Bending", "Transverse Shear"],
      image: "images/Lecture2Quiz_Img2.PNG",
      multi: true
    },
    {
      question: "In mechanical design, the ultimate goal is to:",
      options: ["Minimize the factor of safety.", "Achieve a balance between performance, safety, and cost.", "Maximize the use of high-strength materials.", "Reduce manufacturing complexity."],
      answer: "Achieve a balance between performance, safety, and cost."
    },
    {
      question: "What is the best practice when using AI-generated content for decision-making?",
      options: ["Assume all information is accurate since it comes from a sophisticated algorithm.", "Cross-check the information with credible, independent sources.", "Use it directly without further investigation to save time.", "Trust AI completely if it is a premium or paid service."],
      answer: "Cross-check the information with credible, independent sources."
    },
    {
      question: "According to professional engineering ethic standards, engineers should:",
      options: ["Keep proprietary information confidential, even if it involves public safety.", "Refuse to take responsibility for errors made by a team they supervised.", "Perform services only in areas of their competence and qualifications.", "Accept gifts from suppliers as part of professional networking."],
      answer: "Perform services only in areas of their competence and qualifications."
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
  quizContainer.innerHTML = `
    <h1>Quiz Completed!</h1>
    <p>Your score: ${score}/${quizData.length}</p>
    <h2>Feedback:</h2>
    <ul>${feedback.map(f => `<li>${f}</li>`).join("")}</ul>
  `;
}

showQuestion();
