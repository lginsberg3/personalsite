const quizData = [
    {
      question: "1. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the horizontal force screenshotted below (the solid line), estimate the following: Fmin = ",
      options: ["0 lb", "-100 lb", "-850 lb", "425 lb"],
      answer: "-100 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "2. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the horizontal force screenshotted below (the solid line), estimate the following: Fmax = ",
      options: ["850 lb", "0 lb", "100 lb", "425 lb"],
      answer: "100 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "3. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the horizontal force screenshotted below (the solid line), estimate the following: Fa = ",
      options: ["850 lb", "0 lb", "100 lb", "425 lb"],
      answer: "100 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "4. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the horizontal force screenshotted below (the solid line), estimate the following: Fm = ",
      options: ["850 lb", "0 lb", "100 lb", "425 lb"],
      answer: "0 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "5. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (the dotted line), estimate the following: Fmin = ",
      options: ["150 lb", "0 lb", "-150 lb", "425 lb"],
      answer: "0 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "6. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (the dotted line), estimate the following: Fmax = ",
      options: ["850 lb", "0 lb", "100 lb", "425 lb"],
      answer: "850 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "7. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (the dotted line), estimate the following: Fa = ",
      options: ["850 lb", "0 lb", "100 lb", "425 lb"],
      answer: "425 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "8. (of 20) Watch the video showing a former NCAA All-American Sprinter run on a treadmill at 25 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (the dotted line), estimate the following: Fm = ",
      options: ["850 lb", "0 lb", "100 lb", "425 lb"],
      answer: "425 lb",
      image: "images/Lecture13Quiz_Img1.PNG"
    },
    {
      question: "9. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (in blue), estimate the following: Fmin = ",
      options: ["-150 lb", "0 lb", "-50 lb", "100 lb"],
      answer: "0 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "10. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (in blue), estimate the following: Fmax = ",
      options: ["600 lb", "0 lb", "425 lb", "100 lb"],
      answer: "600 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "11. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (in blue), estimate the following: Fa = ",
      options: ["300 lb", "0 lb", "-300 lb", "100 lb"],
      answer: "300 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "12. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the vertical force screenshotted below (in blue), estimate the following: Fm = ",
      options: ["300 lb", "0 lb", "850 lb", "100 lb"],
      answer: "300 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "13. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the anterior-posterior (front-back) force screenshotted below (in red), estimate the following: Fmin = ",
      options: ["100 lb", "0 lb", "-50 lb", "-100 lb"],
      answer: "-100 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "14. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the anterior-posterior (front-back) force screenshotted below (in red), estimate the following: Fmax = ",
      options: ["600 lb", "0 lb", "425 lb", "100 lb"],
      answer: "100 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "15. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the anterior-posterior (front-back) force screenshotted below (in red), estimate the following: Fa = ",
      options: ["125 lb", "0 lb", "-500 lb", "250 lb"],
      answer: "125 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "16. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the anterior-posterior (front-back) force screenshotted below (in red), estimate the following: Fm = ",
      options: ["-25 lb", "-100 lb", "850 lb", "100 lb"],
      answer: "-25 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "17. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the medial-lateral (left-right) force screenshotted below (in green), estimate the following: Fmin = ",
      options: ["100 lb", "0 lb", "-50 lb", "-100 lb"],
      answer: "-100 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "18. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the medial-lateral (left-right) force screenshotted below (in green), estimate the following: Fmax = ",
      options: ["600 lb", "0 lb", "425 lb", "50 lb"],
      answer: "50 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "19. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the medial-lateral (left-right) force screenshotted below (in green), estimate the following: Fa = ",
      options: ["75 lb", "0 lb", "-500 lb", "250 lb"],
      answer: "75 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
    },
    {
      question: "20. (of 20) Watch the video showing sprint champion Jarryd Wallace run on a treadmill at 24.6 mph while researchers at TCU gather reaction load data. For the medial-lateral (left-right) force screenshotted below (in green), estimate the following: Fm = ",
      options: ["-25 lb", "-100 lb", "850 lb", "100 lb"],
      answer: "-25 lb",
      image: "images/Lecture13Quiz_Img2.PNG"
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
