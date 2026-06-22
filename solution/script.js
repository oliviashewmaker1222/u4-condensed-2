// ============================================================
// NUMBER GUESSING GAME — COMPLETE SOLUTION
// ============================================================

// CONCEPT: querySelector
// Grab references to all elements we'll interact with
let guessInput = document.querySelector("#guess");
let submitButton = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");
let countDisplay = document.querySelector("#count");
let winPanel = document.querySelector("#win-panel");
let answerDisplay = document.querySelector("#answer");
let finalCountDisplay = document.querySelector("#final-count");
let resetButton = document.querySelector("#reset");
let historyList = document.querySelector("#history");

// CONCEPT: Math.random() and Math.floor()
// Generate the secret number (1-100)
let secretNumber = Math.floor(Math.random() * 100) + 1;

// Peek at the secret for testing (remove in production!)
console.log("Shh! The secret number is:", secretNumber);

// Track guess count
let guessCount = 0;

// Track if game is won (for disabling input)
let gameWon = false;


// CONCEPT: addEventListener
submitButton.addEventListener("click", function() {

  // STRETCH: Don't allow guesses after winning
  if (gameWon) {
    feedback.innerHTML = "You already won! Click 'New Game' to play again.";
    return;
  }

  // CONCEPT: .value and Number()
  let guess = Number(guessInput.value);
  console.log("Player guessed:", guess);

  // CONCEPT: Input validation with || (or)
  // Check if input is valid before processing
  if (guess < 1 || guess > 100 || isNaN(guess)) {
    feedback.innerHTML = "Please enter a number between 1 and 100!";
    feedback.className = "feedback-box";
    return;
  }

  // Increment guess count
  guessCount = guessCount + 1;
  countDisplay.innerHTML = guessCount;

  // STRETCH: Add to history
  let historyItem = document.createElement("li");
  historyItem.innerHTML = guess;

  // CONCEPT: if / else if / else
  // Check the guess against the secret number
  if (guess === secretNumber) {
    // CORRECT!
    feedback.innerHTML = "Correct! You got it!";
    feedback.className = "feedback-box correct";

    // CONCEPT: classList.toggle()
    // Reveal the win panel
    winPanel.classList.toggle("hidden");
    answerDisplay.innerHTML = secretNumber;
    finalCountDisplay.innerHTML = guessCount;

    // STRETCH: Mark as won
    gameWon = true;

    // STRETCH: Style history item
    historyItem.className = "correct";

  } else if (guess > secretNumber) {
    // TOO HIGH
    let message = "Too high! Try lower.";

    // STRETCH: "You're close!" hint using && and Math.abs()
    let difference = Math.abs(guess - secretNumber);
    if (difference <= 5) {
      message += " (But you're very close!)";
    }

    feedback.innerHTML = message;
    feedback.className = "feedback-box too-high";
    historyItem.className = "high";

  } else {
    // TOO LOW
    let message = "Too low! Try higher.";

    // STRETCH: "You're close!" hint
    let difference = Math.abs(guess - secretNumber);
    if (difference <= 5) {
      message += " (But you're very close!)";
    }

    feedback.innerHTML = message;
    feedback.className = "feedback-box too-low";
    historyItem.className = "low";
  }

  // STRETCH: Append to history
  // CONCEPT: createElement + appendChild
  historyList.appendChild(historyItem);

  // Clear the input for the next guess
  guessInput.value = "";
  guessInput.focus();

});


// STRETCH: New Game button
resetButton.addEventListener("click", function() {

  // Pick a new secret number
  secretNumber = Math.floor(Math.random() * 100) + 1;
  console.log("New secret number:", secretNumber);

  // Reset guess count
  guessCount = 0;
  countDisplay.innerHTML = "0";

  // Clear feedback
  feedback.innerHTML = "";
  feedback.className = "feedback-box";

  // Hide win panel (add hidden class back)
  if (!winPanel.classList.contains("hidden")) {
    winPanel.classList.toggle("hidden");
  }

  // Clear history
  historyList.innerHTML = "";

  // Clear input
  guessInput.value = "";
  guessInput.focus();

  // Re-enable guessing
  gameWon = false;

  console.log("New game started!");

});
