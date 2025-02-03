const questions = [
    {
        question: "Quel médicament est un antibiotique ?",
        answers: ["Paracétamol", "Amoxicilline", "Ibuprofène", "Aspirine"],
        correct: "Amoxicilline",
        explanation: "L'Amoxicilline est un antibiotique couramment utilisé pour traiter les infections bactériennes."
    },
    {
        question: "Quel médicament est utilisé pour soulager la douleur ?",
        answers: ["Insuline", "Oméprazole", "Paracétamol", "Lévothyroxine"],
        correct: "Paracétamol",
        explanation: "Le paracétamol est un analgésique et antipyrétique utilisé pour soulager la douleur et la fièvre."
    },
    {
        question: "Quel est le rôle de la vitamine D dans le corps humain ?",
        answers: ["Aide à l'absorption du calcium", "Stimule la production de globules rouges", "Augmente la circulation sanguine", "Améliore la vision"],
        correct: "Aide à l'absorption du calcium",
        explanation: "La vitamine D favorise l'absorption du calcium et joue un rôle clé dans la santé des os."
    },
    {
        question: "L'insuline est utilisée pour traiter le diabète.",
        answers: ["Vrai", "Faux"],
        correct: "Vrai",
        explanation: "L'insuline est une hormone essentielle pour réguler le taux de sucre dans le sang."
    },
    {
        question: "Quel médicament est utilisé pour traiter la dépression ?",
        answers: ["Antihistaminiques", "Anticoagulants", "Antidépresseurs", "Antiviraux"],
        correct: "Antidépresseurs",
        explanation: "Les antidépresseurs sont prescrits pour traiter les troubles de l'humeur et de l'anxiété."
    },
    {
        question: "Quel médicament est un analgésique opioïde utilisé pour traiter les douleurs sévères ?",
        answers: ["Morphine", "Paracétamol", "Oméprazole", "Aspirine"],
        correct: "Morphine",
        explanation: "La morphine est un opioïde puissant utilisé pour soulager les douleurs intenses."
    },
    {
        question: "Quel est l'effet secondaire le plus courant des antibiotiques ?",
        answers: ["Diarrhée", "Somnolence", "Constipation", "Maux de tête"],
        correct: "Diarrhée",
        explanation: "Les antibiotiques peuvent perturber la flore intestinale et provoquer des diarrhées."
    },
    {
        question: "Les antibiotiques sont efficaces contre les virus.",
        answers: ["Vrai", "Faux"],
        correct: "Faux",
        explanation: "Les antibiotiques ne sont efficaces que contre les bactéries, pas contre les virus."
    },
    {
        question: "Lequel de ces médicaments est un antidiabétique oral ?",
        answers: ["Metformine", "Insuline", "Glucagon", "Ibuprofène"],
        correct: "Metformine",
        explanation: "La Metformine est un médicament oral utilisé pour traiter le diabète de type 2."
    },
    {
        question: "Quel médicament est prescrit pour l'hypertension ?",
        answers: ["Lisinopril", "Morphine", "Diazépam", "Cétirizine"],
        correct: "Lisinopril",
        explanation: "Le Lisinopril est un inhibiteur de l'enzyme de conversion de l'angiotensine (IEC) utilisé pour traiter l'hypertension."
    }
];

let currentQuestionIndex = 0;
let score = 0;

function loadQuestion() {
    var questionElement = document.getElementById("question");
    var answersContainer = document.getElementById("answers");
    var scoreElement = document.getElementById("score");
    var nextButton = document.getElementById("next-btn");
    var explanationElement = document.getElementById("explanation");

    var currentQuestion = questions[currentQuestionIndex];

    questionElement.textContent = currentQuestion.question;
    answersContainer.innerHTML = "";
    explanationElement.textContent = ""; 
    nextButton.style.display = "none";

    currentQuestion.answers.forEach(answer => {
        let button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("answer-btn");
        button.onclick = () => checkAnswer(button, answer, currentQuestion);
        answersContainer.appendChild(button);
    });

    scoreElement.textContent = `Score : ${score} / ${questions.length}`;
}

function checkAnswer(button, selectedAnswer, currentQuestion) {
    var correctAnswer = currentQuestion.correct;
    var explanationElement = document.getElementById("explanation");

    
    explanationElement.textContent = ""; 

    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
        explanationElement.textContent = currentQuestion.explanation || "Bonne réponse ! ✅";
        explanationElement.style.color = "#2c7a7b";
        explanationElement.style.fontStyle = "italic";
        explanationElement.style.display = "block"; 
    } else {
        button.classList.add("wrong");
        explanationElement.textContent = `Mauvaise réponse ❌ La bonne réponse est : ${correctAnswer}`;
        explanationElement.style.color = "#d32f2f";
        explanationElement.style.fontStyle = "italic";
        explanationElement.style.display = "block"; 
    }

    // Désactiver tous les boutons après avoir sélectionné une réponse
    document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);
    
    // Afficher le bouton "Suivant"
    document.getElementById("next-btn").style.display = "block";
}


function nextQuestion() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
        document.getElementById("next-btn").style.display = "none";
    } else {
        alert(`Quiz terminé ! Votre score final est : ${score} / ${questions.length}`);
        location.reload();
    }
}

function startQuiz() {
    document.getElementById("quiz-intro").style.display = "none";
    document.getElementById("quiz-container").style.display = "block";
    loadQuestion();
}

function restartQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    startQuiz();
}

document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("contact-form");
    const confirmationMessage = document.getElementById("confirmation-message");

    form.addEventListener("submit", function(event) {
        event.preventDefault();
        confirmationMessage.classList.remove("hidden");
        form.reset();
    });
});

document.addEventListener("DOMContentLoaded", function() {
    let questions = document.querySelectorAll(".faq-question");

    questions.forEach(question => {
        question.addEventListener("click", function() {
            let answer = this.nextElementSibling;

            
            if (answer.style.display === "block") {
                answer.style.display = "none";
            } else {
                answer.style.display = "block";
            }
        });
    });
});

function addPost() {
    let postContent = document.getElementById("post-content").value;
    if (postContent.trim() === "") return;

    let postContainer = document.getElementById("posts-container");
    let newPost = document.createElement("div");
    newPost.classList.add("post");
    newPost.textContent = postContent;

    postContainer.prepend(newPost);
    document.getElementById("post-content").value = "";
}
document.addEventListener("DOMContentLoaded", function () {
    const newTopicForm = document.getElementById("new-topic-form");

    if (newTopicForm) {
        newTopicForm.addEventListener("submit", function (e) {
            e.preventDefault();
            const title = document.getElementById("topic-title").value;
            const content = document.getElementById("topic-content").value;

            if (title && content) {
                alert("Votre sujet a été publié !");
                newTopicForm.reset();
            }
        });
    }
});
