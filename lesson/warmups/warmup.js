// ============================================================
// SESSION 2 WARMUPS: LOGIC PRACTICE
// ============================================================
// Complete these exercises before building the Guessing Game.
// Open your browser console (DevTools) to see results!
// ============================================================


// ************************************************************
// EXERCISE 1: COMPARISONS (WE DO TOGETHER)
// ************************************************************
// Comparisons give us true or false (booleans)
// Operators: < > <= >= === !==

let comparisonsButton = document.querySelector("#run-comparisons");

comparisonsButton.addEventListener("click", function() {

  // WE DO TOGETHER: Let's see what these comparisons return
  console.log("--- Comparisons ---");
  console.log("5 > 3 is:", 5 > 3);           // true
  console.log("10 < 5 is:", 10 < 5);         // false
  console.log("7 === 7 is:", 7 === 7);       // true
  console.log("7 === '7' is:", 7 === "7");   // false (different types!)
  console.log("10 !== 5 is:", 10 !== 5);     // true


  // ============================================================
  // YOUR TURN: Predict what these will log, then uncomment to check
  // ============================================================

  console.log("15 >= 15 is:", 15 >= 15); // true
  console.log("3 <= 2 is:", 3 <= 2); // false
  console.log("'hello' === 'hello' is:", "hello" === "hello"); // true
  console.log("100 > 99 is:", 100 > 99); // true

});


// ************************************************************
// EXERCISE 2: IF / ELSE (WE DO TOGETHER)
// ************************************************************
// if (condition) { ... } else { ... }
// Run different code based on a condition

let checkBigButton = document.querySelector("#check-big");

checkBigButton.addEventListener("click", function() {

  let userNumber = Number(document.querySelector("#big-number").value);

  // WE DO TOGETHER: Check if the number is "big" (50 or more)
  if (userNumber >= 50) {
    alert("That's a BIG number!");
  } else {
    alert("That's a small number.");
  }

  // ============================================================
  // YOUR TURN: Modify this to have THREE categories:
  // - "Tiny!" for numbers under 10
  // - "Medium" for numbers 10-49
  // - "Big!" for numbers 50 and up
  // Hint: You'll need if / else if / else
  // ============================================================

  if(userNumber >= 50){
    alert("That's a BIG number");
  } else if(userNumber >= 10){
    alert("That's a Medium number");
  } else{
    alert("That's a tiny number!");
  }
});


// ************************************************************
// EXERCISE 3: THE GRADE CHECKER GOTCHA (WE DO TOGETHER)
// ************************************************************
// Order matters in if/else if chains!
// We'll write it WRONG first, then fix it.

let checkGradeButton = document.querySelector("#check-grade");
let gradeResult = document.querySelector("#grade-result");

checkGradeButton.addEventListener("click", function() {

  let score = Number(document.querySelector("#score").value);
  let grade;

  // ============================================================
  // WE DO TOGETHER - THE BUG!
  // ============================================================
  // This code has a bug - try entering 75. What grade do you get?
  // Try entering 95. What about 55?
  //
  // UNCOMMENT THIS BUGGY VERSION FIRST:
  // ------------------------------------------------------------

  /*
  if (score >= 60) {
    grade = "D";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 90) {
    grade = "A";
  } else {
    grade = "F";
  } 
  */
  
  // ============================================================
  // WE DO TOGETHER - THE FIX!
  // ============================================================
  // Why did everyone get a D? Because 75 IS >= 60, so it stops there!
  // We need to check from HIGHEST to LOWEST.
  //
  // AFTER seeing the bug, comment out the buggy version and
  // uncomment this fixed version:
  // ------------------------------------------------------------

  if (score >= 90) {
    grade = "A";
  } else if (score >= 80) {
    grade = "B";
  } else if (score >= 70) {
    grade = "C";
  } else if (score >= 60) {
    grade = "D";
  } else {
    grade = "F";
  }

  gradeResult.innerHTML = `Score: ${score} &rarr; Grade: ${grade}`;

  // ============================================================
  // YOUR TURN: Write a temperature checker
  // ============================================================
  // Create your own if/else if/else chain:
  // - 90+ degrees: "Hot!"
  // - 70-89 degrees: "Nice"
  // - 50-69 degrees: "Cool"
  // - Below 50: "Cold!"
  //
  // Log the result to the console. Remember to order high to low!

  if(temp >= 90){
    console.log("HOT!");
  } else if(temp >=70){
    console.log("Nice!");
  } else if(temp >= 50){
    console.log("Cool!");
  } else{
    console.log("Cold!");
  }

});


// ************************************************************
// EXERCISE 4: && AND || (WE DO TOGETHER)
// ************************************************************
// && means "AND" - both must be true
// || means "OR" - at least one must be true

let checkRangeButton = document.querySelector("#check-range");
let rangeResult = document.querySelector("#range-result");

checkRangeButton.addEventListener("click", function() {

  let num = Number(document.querySelector("#range-check").value);

  // WE DO TOGETHER: Check if number is valid (between 1 and 100)
  if (num >= 1 && num <= 100) {
    rangeResult.innerHTML = `${num} is valid! It's between 1 and 100.`;
  } else {
    rangeResult.innerHTML = `${num} is out of range. Please enter 1-100.`;
  }

  // ============================================================
  // YOUR TURN: Add another check
  // ============================================================
  // Below the range check, add a console.log that checks if the
  // number is EITHER very low (under 10) OR very high (over 90)
  //
  // Hint: Use || for "or"
  
  if (num < 10 || num > 90) {
    alert("Number is an outliner!")
  }



});


// ************************************************************
// EXERCISE 5: RANDOM NUMBERS (WE DO TOGETHER)
// ************************************************************
// Math.random() gives a decimal between 0 and 1
// Math.floor() rounds DOWN to a whole number
// Combine them to get random whole numbers in a range!

let generateRandomButton = document.querySelector("#generate-random");
let randomResult = document.querySelector("#random-result");

generateRandomButton.addEventListener("click", function() {

  // WE DO TOGETHER: Generate a random number 1-100
  // Step by step:
  // 1. Math.random() gives us 0 to 0.999...
  // 2. Multiply by 100 to get 0 to 99.999...
  // 3. Math.floor() rounds down to 0 to 99
  // 4. Add 1 to get 1 to 100

  let secretNumber = Math.floor(Math.random() * 100) + 1;

  // let isInRange; 

  if(secretNumber < 30 && secretNumber > 10){
    isInRange = "Your number is in range!";
  } else{
    isInRange = "Your number is not in range!";
  }
 /* Extra
  let isInRange = secretNumber < 30 && secretNumber > 10 
  ? "Your number is in range!"
  : "Your number is not in range!";
  */

  console.log("Is in range: ", isInRange);

  randomResult.innerHTML = `Random number: ${secretNumber}`;
  console.log("Generated:", secretNumber);

  // ============================================================
  // YOUR TURN: Generate a random number in a different range
  // ============================================================
  // Try generating:
  // - A random number 1-10 (for a smaller game)
  // - A random number 1-6 (like a dice roll)
  //
  // The formula is: Math.floor(Math.random() * MAX) + 1
  // Log your results to the console!
  let num1 = Math.floor(Math.random() * 10) +1;
  console.log(num1);

   let num2 = Math.floor(Math.random() * 6) +1;
   console.log(num2);
});
