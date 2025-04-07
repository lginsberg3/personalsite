const quizData = [
    {
      question: "1. (of 10) Watch <a href="https://www.youtube.com/watch?v=Z8msUZVY4xA&ab_channel=LocomotorLabTCU" target="_blank"> this video</a> showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the horizontal force screenshotted below (the solid line), estimate the following: Fmin =",
      options: ["0 lb", "-100 lb", "-850 lb", "425 lb"],
      answer: "stress-life",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "2. (of 10) Which of the below sketches looks most like a completely reversed stress cycle?",
      options: ["A", "B", "C", "D"],
      answer: "A",
      image: "images/Lecture10Quiz_Img1.PNG"
    },
    {
      question: "3. (of 10) It is not uncommon for fatigue tests to test specimens up to 10^9 stress cycles. Assuming continuous operation of the tester, estimate the time required to achieve 10^9 stress cycles using each of the following tester: A traditional servohydraulic testing machine (which can run up to around 50 Hz)",
      options: ["7 months", "12 days", "5 hours", "200 years"],
      answer: "7 months"
    },
    {
      question: "4. (of 10) It is not uncommon for fatigue tests to test specimens up to 10^9 stress cycles. Assuming continuous operation of the tester, estimate the time required to achieve 10^9 stress cycles using each of the following tester: A rotating beam fatigue testing system (which can achieve speeds up to 10,000 rpm)",
      options: ["2 months", "1 day", "9 hours", "3 years"],
      answer: "2 months"
    },
    {
      question: "5. (of 10) A part is subjected to cyclic loading at a frequency of 100 Hz. The part is required to be designed for infinite life. Which material should be used?",
      options: ["AISI 1035 steel", "Al 6061-T6 (aluminum alloy)", "Either AISI 1035 steel or Al 6061-T6 can be used.", "Neither AISI 1035 steel nor Al 6061-T6 should be used."],
      answer: "AISI 1035 steel"
    },
    {
      question: "6. (of 10) A material has an ultimate tensile strength of 1500 MPa. Identify the most likely value for the fully corrected endurance limit, Se",
      options: ["750 MPa", "400 MPa", "40 MPa", "None of these"],
      answer: "400 MPa"
    },
    {
      question: "7. (of 10) Estimate S'e in MPa for an AISI 1035 CD (Cold-Drawn) steel. Use Table A-20 in Shigley's Mechanical Engineering Design to find any material properties.",
      options: ["275 MPa", "700 MPa", "100 MPa", "137.5 MPa"],
      answer: "275 MPa"
    },
    {
      question: "8. (of 10) Estimate S'e in MPa for an AISI 1050 HR (Hot-Rolled) steel. Use Table A-20 in Shigley's Mechanical Engineering Design to find any material properties.",
      options: ["810.16 MPa", "700 MPa", "400 MPa", "45 MPa"],
      answer: "700 MPa"
    },
    {
      question: "9. (of 10) Estimate S'e in MPa for an AISI 4130 steel heat-treated to a tensile strength of 1620.325 MPa. Use Table A-20 in Shigley's Mechanical Engineering Design to find any material properties.",
      options: ["310 MPa", "700 MPa", "155 MPa", "200 MPa"],
      answer: "310 MPa"
    },
    {
      question: "10. (of 10) Estimate the endurance strength (Se) of a 38.100 mm-diameter rod of AISI 1040 steel having a machined finish and heat-treated to a tensile strength of 758.450 MPa, loaded in rotating bending.",
      options: ["152.90 MPa", "229.36 MPa", "194.95 MPa", "135.32 MPa"],
      answer: "229.36 MPa"
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
