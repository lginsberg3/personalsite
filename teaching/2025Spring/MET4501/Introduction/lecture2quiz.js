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
      question: "For a beam in bending, where is the shear stress maximum?",
      options: ["At the neutral axis.", "At the outermost fibers.", "At the centroid.", "Shear stress is constant across the section."],
      answer: "At the neutral axis."
    },
    {
      question: "A solid circular shaft is subjected to torsion. How does the shear stress vary across the cross-section?",
      options: ["It is constant across the section.", "It is zero at the center and maximum at the outer surface.", "It is maximum at the center and zero at the outer surface.", "It increases linearly toward the neutral axis."],
      answer: "It is zero at the center and maximum at the outer surface."
    },
    {
      question: "In a beam under pure bending, where is the maximum normal stress located?",
      options: ["At the neutral axis.", "At the outermost fibers of the beam.", "At the centroid of the beam's cross-section.", "At the midpoint of the beam's length."],
      answer: "At the outermost fibers of the beam."
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
