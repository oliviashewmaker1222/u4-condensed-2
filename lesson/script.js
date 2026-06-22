// ============================================================
// NUMBER GUESSING GAME
// ============================================================
//
// THE GAME:
// 1. Computer picks a random number 1-100
// 2. Player guesses
// 3. Computer says "too high", "too low", or "correct!"
// 4. Track how many guesses it takes
//
// This game uses EVERYTHING from Session 1 (querySelector, events,
// .value, Number(), innerHTML) PLUS all the new Session 2 concepts!
//
// ============================================================


// ************************************************************
// WE DO TOGETHER - Part 1: Set up the game
// ************************************************************
// First, we pick the secret number when the page loads.
// We also grab references to the elements we'll use.

// Generate the secret number (1-100)
let secretNumber = Math.floor(Math.random() * 100) + 1;

// PEEK AT THE SECRET (for testing - we can see it in the console!)
console.log("Shh! The secret number is:", secretNumber);

// Grab our elements
let guessInput = document.querySelector("#guess");
let submitButton = document.querySelector("#submit");
let feedback = document.querySelector("#feedback");
let countDisplay = document.querySelector("#count");

// Keep track of how many guesses
let guessCount = 0;


// ************************************************************
// WE DO TOGETHER - Part 2: Handle the guess
// ************************************************************
// When the player clicks "Guess!", we:
// 1. Read their guess
// 2. Convert it to a number
// 3. Check if it's correct

let historyUl = document.querySelector('#history');

let gameWon = false;

function createHistory(guess, guessClass){
  
  let guessLi = document.createElement("li");
  guessLi.classList.toggle(guessClass);
  guessLi.innerHTML = guess;

  historyUl.appendChild(guessLi);
}

submitButton.addEventListener("click", function() {

  // Read the input and convert to a number
  let guess = Number(guessInput.value);

  // Log it so we can see what we're working with
  console.log("Player guessed:", guess);

  guessCount++;
  document.querySelector("#final-count").innerHTML = guessCount;
  countDisplay.innerHTML = guessCount;

  if (gameWon) {
    feedback.innerHTML = "You already won! Click 'New Game' to play again.";
    return;
  }

  // **********************************************************
  // WE DO TOGETHER - Part 3: The win case
  // **********************************************************
  // Let's write the WINNING case first!

  if (guess < 1 || guess > 100 || isNaN(guess)) {
    feedback.innerHTML = "Please enter a number between 1 and 100!";
  } else if (guess === secretNumber) {
    feedback.innerHTML = "Correct! You got it!";
    console.log("WINNER!");
    document.querySelector("#win-panel").classList.toggle("hidden");
    document.querySelector("#answer").innerHTML = secretNumber;
    gameWon = true;
  } else if (guess > secretNumber){
    feedback.innerHTML = "Too high! Try lower.";
    console.log("Try Again!");
    createHistory(guess, "high");
  } else{
    feedback.innerHTML = "Too low! Try higher.";
    console.log("Try Again!");
    createHistory(guess, "low");
  }

  let difference = Math.abs(guess - secretNumber);

  if (difference <= 5 && guess !== secretNumber) {
    feedback.innerHTML += " You're very close!";
  }
  
  let resetButton = document.querySelector("#reset");
  
  resetButton.addEventListener("click", function() {
    secretNumber = Math.floor(Math.random() * 100) + 1;
    console.log("New secret number:", secretNumber);

    guessCount = 0;
    countDisplay.innerHTML = "0";

    feedback.innerHTML = "";

    let winPanel = document.querySelector('#win-panel');
    winPanel.classList.add("hidden");

    historyUl.innerHTML = "";

    gameWon = false;

    console.log("New game started!");
});

  // ============================================================
  // YOUR TURN! Add the other cases and features below.
  // ============================================================


  // **********************************************************
  // YOUR TURN - Step 1: Add "too high" and "too low"
  // **********************************************************
  // Right now we only check if the guess is correct.
  // Change the if statement to an if/else if/else:
  //
  // - If guess === secretNumber -> "Correct!"
  // - Else if guess > secretNumber -> "Too high! Try lower."
  // - Else -> "Too low! Try higher."
  //
  // Update the feedback.innerHTML for each case.

  // Modify the if statement above to add these cases


  // **********************************************************
  // YOUR TURN - Step 2: Validate the input
  // **********************************************************
  // What if the player enters 150? Or -5? Or nothing?
  // Add a check at the BEGINNING of this function:
  //
  // if (guess < 1 || guess > 100) {
  //   feedback.innerHTML = "Please enter a number between 1 and 100!";
  //   return;  // Stop here, don't continue
  // }
  //
  // The "return;" stops the function early so we don't process invalid guesses.

  // Your code here (add it at the top of this function, after let guess = ...)


  // **********************************************************
  // YOUR TURN - Step 3: Count the guesses
  // **********************************************************
  // We have a guessCount variable set to 0 at the top.
  // Each time the player makes a valid guess:
  // 1. Add 1 to guessCount (guessCount = guessCount + 1; or guessCount++;)
  // 2. Update the display: countDisplay.innerHTML = guessCount;

  // Your code here:


  // **********************************************************
  // YOUR TURN - Step 4: Reveal the win panel
  // **********************************************************
  // When the player wins, we want to show the hidden win panel.
  // The panel has class "hidden" which makes it invisible.
  //
  // Inside your "correct" case, add:
  // document.querySelector("#win-panel").classList.toggle("hidden");
  //
  // Also update the spans inside the panel:
  // document.querySelector("#answer").innerHTML = secretNumber;
  // document.querySelector("#final-count").innerHTML = guessCount;

  // Your code here (add inside the winning if block):


});


// ============================================================
// STRETCH GOALS (if you finish early!)
// ============================================================

// STRETCH 1: Add guess history
// Each time the player guesses, add it to the #history list.
// Use createElement and appendChild:
//
// let historyItem = document.createElement("li");
// historyItem.innerHTML = guess;
// document.querySelector("#history").appendChild(historyItem);
//
// Bonus: Add a class to show if it was high, low, or correct!


// STRETCH 2: "You're close!" hint
// When the guess is within 5 of the secret number, add a hint.
// Use && to check: if the difference is <= 5 AND the guess isn't correct.
//
// let difference = Math.abs(guess - secretNumber);
// if (difference <= 5 && guess !== secretNumber) {
//   // Add "You're very close!" to the feedback
// }


// STRETCH 3: New Game button
// Make the #reset button start a new game:
// 1. Pick a new secret number
// 2. Reset guessCount to 0
// 3. Clear the feedback and history
// 4. Hide the win panel (add "hidden" class back)
// 5. Clear the input field


// STRETCH 4: Disable guessing after winning
// After the player wins, they shouldn't be able to keep guessing.
// One way: set submitButton.disabled = true; when they win
// Remember to set it back to false when starting a new game!
