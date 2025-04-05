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
const quizElement = document.getElementById("quiz");

let currentQuestion = 0;
let score = 0;
let userAnswers = []; // Store user's answers

function showQuestion() {
    const question = quizData[currentQuestion];
    questionElement.innerText = question.question;

    optionsElement.innerHTML = "";
    question.options.forEach(option => {
        const button = document.createElement("button");
        button.innerText = option;
        optionsElement.appendChild(button);
        button.addEventListener("click", selectAnswer);
    });
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const answer = quizData[currentQuestion].answer;

    // Store whether the answer was correct and the user's choice
    userAnswers.push({
        question: quizData[currentQuestion].question,
        selected: selectedButton.innerText,
        correct: selectedButton.innerText === answer,
        correctAnswer: answer
    });

    if (selectedButton.innerText === answer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    quizElement.innerHTML = `<h1>Quiz Completed!</h1>
                             <p>Your score: ${score}/${quizData.length}</p>
                             <h2>Review Your Answers:</h2>`;

    userAnswers.forEach((entry, index) => {
        const questionResult = document.createElement("div");
        questionResult.innerHTML = `<p><strong>Q${index + 1}:</strong> ${entry.question}</p>
                                    <p><strong>Your answer:</strong> ${entry.selected} ${entry.correct ? "✅" : "❌"}</p>
                                    ${!entry.correct ? `<p><strong>Correct answer:</strong> ${entry.correctAnswer}</p>` : ""}
                                    <hr>`;
        quizElement.appendChild(questionResult);
    });
}

showQuestion();
