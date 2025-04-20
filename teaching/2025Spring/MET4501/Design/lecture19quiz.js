const quizData = [
    {
      question: "1. (of 10) You agreed to help a friend move a heavy piece of furniture. You are considering two designs to assist the move, as pictured below. Which design will make the piece of furniture easier to move? In other words, which design needs less horizontal force applied to the piece of furniture?",
      options: ["Design A", "Design B"],
      answer: "Design A",
      image: "Lecture19Quiz_Img1.PNG"
    },
    {
      question: "2. (of 10) You agreed to help a friend move a heavy piece of furniture. You are considering two designs to assist the move, as pictured below. If the same horizontal force is applied to the piece of furniture, which design will allow the piece of furniture to move faster?",
      options: ["Design A", "Design B"],
      answer: "Design A",
      image: "Lecture19Quiz_Img1.PNG"
    },
    {
      question: "3. (of 10) You agreed to help a friend move a heavy piece of furniture. You are considering two designs to assist the move, as pictured below. Which design do you expect to be more expensive?",
      options: ["Design A", "Design B"],
      answer: "Design A",
      image: "Lecture19Quiz_Img1.PNG"
    },
    {
      question: "4. (of 10) Consider the SKF (which rates its bearings for 1 million revolutions) ball bearing pictured. If you desire a life of 5000 hrs at 1725 rev/min with a reliability of 90%, what is the maximum dynamic load that could be applied to the bearing?",
      options: ["1792 N", "1557 N", "12.5 kN", "10.8 kN", "1937 N"],
      answer: "1557 N",
      image: "Lecture19Quiz_Img2.PNG"
    },
    {
      question: "5. (of 10) Consider the SKF (which rates its bearings for 1 million revolutions) ball bearing pictured. If you desire a life of 5000 hrs at 1725 rev/min with a dynamic load of 1200 N with a reliability of 95%, does the pictured bearing meet the load requirements?",
      options: ["Yes", "No"],
      answer: "No",
      image: "Lecture19Quiz_Img2.PNG"
    },
    {
      question: "6. (of 10) What is most nearly the minimum required basic load rating for a single row of ball bearings with an equivalent radial load of 22 kN and a design life of 340 000 revolutions?",
      options: ["15 kN", "16 kN", "22 kN", "33 kN"],
      answer: "15 kN"
    },
    {
      question: "7. (of 10) The maximum contact pressure in Hertzian contact occurs at:",
      options: ["The edge of the contact area", "Uniformly across the contact area", "The center of the contact area"],
      answer: "The center of the contact area"
    },
    {
      question: "8. (of 10) For two spheres in contact, how does the contact area change as the applied compressive load increases?",
      options: ["It remains constant", "It decreases", "It increases", "It fluctuates randomly"],
      answer: "It increases"
    },
    {
      question: "9. (of 10) In a ball bearing, Hertzian contact stress occurs between:",
      options: ["The balls and the races", "The outer race and the inner race", "The lubricant and the bearing surfaces"],
      answer: "The balls and the races"
    },
    {
      question: "10. (of 10) The main failure mode associated with Hertzian contact in rolling elements is:",
      options: ["Brittle fracture", "Creep deformation", "Surface fatigue (pitting)", "Thermal expansion"],
      answer: "Surface fatigue (pitting)"
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
