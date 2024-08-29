let score = parseInt(localStorage.getItem('score')) || 0;

function submitanswer1() {

    let selectedOption = document.querySelector('input[name="q1"]:checked');

    if (selectedOption) {

        document.querySelectorAll('input[name="q1"]').forEach(option => {
            option.disabled = true;
        });

        if (selectedOption.value === "B") {
            score += 1;
        }
        localStorage.setItem('score', score);

        window.location.href = 'quiz2.html';
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function submitanswer2() {

    let selectedOption = document.querySelector('input[name="q2"]:checked');

    if (selectedOption) {

        document.querySelectorAll('input[name="q2"]').forEach(option => {
            option.disabled = true;
        });

        if (selectedOption.value === "B") {
            score += 1;
        }

        localStorage.setItem('score', score);

        window.location.href = 'quiz3.html';
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function submitanswer3() {

    let selectedOption = document.querySelector('input[name="q3"]:checked');

    if (selectedOption) {

        document.querySelectorAll('input[name="q3"]').forEach(option => {
            option.disabled = true;
        });

        if (selectedOption.value === "B") {
            score += 1;
        }

        localStorage.setItem('score', score);

        window.location.href = 'quiz4.html';
    } else {
        alert("Please select an answer before proceeding.");
    }
}

function submitanswer4() {
    let selectedOption = document.querySelector('input[name="q4"]:checked');
    
    if (selectedOption) {
        document.querySelectorAll('input[name="q4"]').forEach(option => {
            option.disabled = true;
        });
    
        if (selectedOption.value === "B") {
            score += 1;
        }
        score = parseInt(localStorage.getItem('score'));
        window.location.href = 'quiz5.html';
    } else {
        alert("Please select an answer before proceeding.");
    }
}
function submitFinalAnswer() {
    let selectedOption = document.querySelector('input[name="q5"]:checked');
    
    if (selectedOption) {
        document.querySelectorAll('input[name="q5"]').forEach(option => {
            option.disabled = true;
        });

        if (selectedOption.value === "A") {
            score += 1;
        }

        const scoreDisplay = document.getElementById('scoreDisplay');
        scoreDisplay.textContent = "Score: " + score;

        if (score >= 3) {
            alert("Congratulations! You passed the quiz. Your score is: " + score);
        } else {
            alert("Better luck next time. Your score is: " + score);
        }
        localStorage.removeItem('score');

        setTimeout(() => {
            window.location.href = 'welcome.html'; // Replace 'index.html' with the path to your first page
        }, 10000);

    } else {
        alert("Please select an answer before finishing.");
    }
}