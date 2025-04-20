const quizData = [
    {
      question: "1. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the torsional yield strength of the wire.",
      options: ["906 MPa", "2014 MPa", "2211 MPa", "1800 MPa"],
      answer: "906 MPa"
    },
    {
      question: "2. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the static load corresponding to the yield strength.",
      options: ["28 N", "160 N", "123 N", "245 N"],
      answer: "123 N"
    },
    {
      question: "3. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the scale of the spring.",
      options: ["1.45 N/mm", "2.05 N/mm", "0.72 N/mm", "2050 N/mm"],
      answer: "2.05 N/mm"
    },
    {
      question: "4. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the deflection that would be caused by the static load corresponding to the yield strength (the load found in question 2).",
      options: ["39.7 mm", "59.9 mm", "59.9 m", "39.7 m"],
      answer: "27.1 mm"
    },
    {
      question: "5. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the solid length of the spring.",
      options: ["12.7 mm", "27.1 mm", "52.4 mm", "89.4 mm"],
      answer: "59.9 mm"
    },
    {
      question: "6. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. What length should the spring be to ensure that when it is compressed solid and then released, there will be no permanent change in the free length?",
      options: ["86.9 mm", "89.4 mm", "52.4 mm", "72.0 mm"],
      answer: "86.9 mm"
    },
    {
      question: "7. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. What is the fractional overrun to closure for this spring (using the free length given in the problem statement)?",
      options: ["0.42", "0.12", "0.84", "0.25"],
      answer: "0.42"
    },
    {
      question: "8. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. What are the mean and alternating loads on this spring?",
      options: ["Fm = 40 N; Fa = 50 N", "Fm = 10 N; Fa = 90 N", "Fm = 90 N; Fa = 10 N", "Fm = 50 N; Fa = 40 N"],
      answer: "Fm = 50 N; Fa = 40 N"
    },
    {
      question: "9. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the factor of safety guarding against fatigue failure using a torsional Goodman failure criterion with Zimmerli data.",
      options: ["1.23", "0.22", "0.86", "1.56"],
      answer: "0.86"
    },
    {
      question: "10. (of 10) An as-wound helical compression spring, made of music wire, has a wire size of 1.905 mm, an outside coil diameter of 19.380 mm, a free length of 89.383 mm, 14.2 total coils, and both ends squared and ground. The spring is unpeened. This spring is to be assembled with a preload of 10 N and will operate with a maximum load of 90 N during use. Some tables from Shigley that you might need are: Table 10-1, Table 10-4, Table 10-5,& Table 10-6. Estimate the critical frequency of the spring. You can assume the ends of the spring are always in contact with the plates.",
      options: ["55 Hz", "281 Hz", "93 Hz","185 Hz"],
      answer: "185 Hz"
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
