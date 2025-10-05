// Function to check the answer
function checkAnswer() {
    // Correct answer
    const correctAnswer = "4";

    // Get the selected answer
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Reference to feedback element
    const feedback = document.getElementById("feedback");

    if (selectedOption) {
        const userAnswer = selectedOption.value;

        // Compare user answer with correct answer
        if (userAnswer === correctAnswer) {
            feedback.textContent = "Correct! Well done.";
            feedback.style.color = "green";
        } else {
            feedback.textContent = "That's incorrect. Try again!";
            feedback.style.color = "red";
        }
    } else {
        feedback.textContent = "Please select an answer before submitting.";
        feedback.style.color = "orange";
    }
}

// Add event listener to button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
