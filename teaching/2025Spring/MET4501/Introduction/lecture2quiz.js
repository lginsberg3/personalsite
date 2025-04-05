const quizData = [
    {
      question: "Which of the following statements best describes the process of design in the context of this course (MET 4501: Machine Design)?",
      options: ["Design is the act of creating an entirely new device to solve a problem.", "Design is a decision-making process focused on meeting a specified need through planning.", "Design involves formulating multiple inventions for commercial production.", "Design is mainly focused on the aesthetic choices to create an appealing product."],
      answer: "Design is a decision-making process focused on meeting a specified need through planning.",
      image: "images/Lecture2Quiz_Img1.png"
    },
    {
      question: "What is an iterative design process?",
      options: ["A process that begins and ends with a single solution.", "A linear process with no feedback loops.", "A repetitive process that refines and optimizes design solutions.", "A process that avoids changes to the original design."],
      answer: "A repetitive process that refines and optimizes design solutions."
    },
    {
      question: "What does the factor of safety represent?",
      options: ["The margin by which a material exceeds design requriements.", "The minimum allowable stress for a material.", "The ratio of applied load to ultimate load capacity.", "The likelihood of a design failing."],
      answer: "The margin by which a material exceeds design requriements."
    },
    {
      question: "Which of the following typically has the lowest factor of safety?",
      options: ["Aircraft components", "A screwdriver", "Structural steel", "Cast-iron wheels"],
      answer: "Aircraft components"
    },
    {
      question: "You are designing a flywheel for an energy storage application. The factor of safety for the flywheel is most likely:",
      options: ["1.2", "2.0", "5.0", "10"],
      answer: "2.0"
    },
    {
      question: "A free-body diagram is mainly used to:",
      options: ["Select materials.", "Evaluate aesthetic design features.", "Analyze forces acting on a body.", "Predict manufacturing costs."],
      answer: "Analyze forces acting on a body."
    },
    {
      question: "What is the primary purpose of design codes and standards?",
      options: ["To enhance aesthetic appeal.", "To provide consistent guidelines ensuring safety and functionality.", "To reduce manufacturing costs.", "To enforce uniformity in patent filings."],
      answer: "To provide consistent guidelines ensuring safety and functionality."
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
