let questionsAsked = 0;
let questionsCorrect = 0;

async function loadQuestion() {
    try {
        const response = await fetch('/api/question');
        const currentQuestion = await response.json();

        const questionContainer = document.getElementById("question-container");
        questionContainer.innerHTML = `<p class="question">${currentQuestion.question}</p>`; // Osiguravamo da se pitanje prikaže

        const options = [
            currentQuestion.option1,
            currentQuestion.option2,
            currentQuestion.option3,
            currentQuestion.option4,
            currentQuestion.option5
        ];

        const optionsList = document.createElement('ul');
        optionsList.className = 'options';

        options.forEach((option, index) => {
            if (option && option.trim() !== '') {
                const li = document.createElement('li');
                const btn = document.createElement('button');
                btn.textContent = option;
                btn.onclick = () => checkAnswer(index + 1, currentQuestion.correct_option);
                li.appendChild(btn);
                optionsList.appendChild(li);
            }
        });

        questionContainer.appendChild(optionsList);

    } catch (error) {
        console.error('Failed to load question:', error);
    }
}

function checkAnswer(selectedIndex, correctOption) {
    const buttons = document.querySelectorAll("button");
    const resultContainer = document.getElementById("result-container");

    questionsAsked++;

    buttons.forEach((btn, idx) => {
        btn.disabled = true;
        btn.classList.remove('correct', 'incorrect', 'correct-border');
        if (idx + 1 === correctOption) {
            btn.classList.add('correct-border');
        }
    });

    if (selectedIndex === correctOption) {
        buttons[selectedIndex - 1].classList.add('correct');
        resultContainer.innerText = "Correct!";
        questionsCorrect++;
    } else {
        buttons[selectedIndex - 1].classList.add('incorrect');
        buttons[correctOption - 1].classList.add('correct-border');
        resultContainer.innerText = "Incorrect.";
    }

    updateScore();

    setTimeout(() => {
        resultContainer.innerText = "";
        loadQuestion();
    }, 1000);
}

function updateScore() {
    const scoreContainer = document.getElementById("score-container");
    scoreContainer.textContent = `Score: ${questionsCorrect}/${questionsAsked}`;
}

window.onload = () => {
    loadQuestion();
};
