// ============================================================
// SESSION 2 WARMUPS: LOGIC PRACTICE — COMPLETE SOLUTION
// ============================================================

// CONCEPT: querySelector
let comparisonsButton = document.querySelector("#run-comparisons");
let checkBigButton = document.querySelector("#check-big");
let checkGradeButton = document.querySelector("#check-grade");
let gradeResult = document.querySelector("#grade-result");
let checkRangeButton = document.querySelector("#check-range");
let rangeResult = document.querySelector("#range-result");
let generateRandomButton = document.querySelector("#generate-random");
let randomResult = document.querySelector("#random-result");


// ************************************************************
// EXERCISE 1: COMPARISONS
// ************************************************************
// CONCEPT: Comparison operators (< > <= >= === !==)

comparisonsButton.addEventListener("click", function() {

  console.log("--- Comparisons ---");
  console.log("5 > 3 is:", 5 > 3);           // true
  console.log("10 < 5 is:", 10 < 5);         // false
  console.log("7 === 7 is:", 7 === 7);       // true
  console.log("7 === '7' is:", 7 === "7");   // false (different types!)
  console.log("10 !== 5 is:", 10 !== 5);     // true

  // YOUR TURN solutions:
  console.log("--- Your Turn ---");
  console.log("15 >= 15 is:", 15 >= 15);                      // true
  console.log("3 <= 2 is:", 3 <= 2);                          // false
  console.log("'hello' === 'hello' is:", "hello" === "hello"); // true
  console.log("100 > 99 is:", 100 > 99);                      // true

});


// ************************************************************
// EXERCISE 2: IF / ELSE
// ************************************************************
// CONCEPT: if / else if / else branching

checkBigButton.addEventListener("click", function() {

  let userNumber = Number(document.querySelector("#big-number").value);

  // CONCEPT: if / else if / else (three categories)
  if (userNumber >= 50) {
    alert("That's a BIG number!");
  } else if (userNumber >= 10) {
    alert("That's a medium number.");
  } else {
    alert("Tiny!");
  }

});


// ************************************************************
// EXERCISE 3: THE GRADE CHECKER
// ************************************************************
// CONCEPT: Order matters in if/else if chains - check high to low

checkGradeButton.addEventListener("click", function() {

  let score = Number(document.querySelector("#score").value);
  let grade;

  // CONCEPT: Correct order - highest first
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

  // YOUR TURN solution: Temperature checker
  let temp = score; // Reusing the input for demo
  let description;

  if (temp >= 90) {
    description = "Hot!";
  } else if (temp >= 70) {
    description = "Nice";
  } else if (temp >= 50) {
    description = "Cool";
  } else {
    description = "Cold!";
  }

  console.log(`Temperature ${temp} degrees is: ${description}`);

});


// ************************************************************
// EXERCISE 4: && AND ||
// ************************************************************
// CONCEPT: Logical operators && (and) || (or)

checkRangeButton.addEventListener("click", function() {

  let num = Number(document.querySelector("#range-check").value);

  // CONCEPT: && to check a range
  if (num >= 1 && num <= 100) {
    rangeResult.innerHTML = `${num} is valid! It's between 1 and 100.`;
  } else {
    rangeResult.innerHTML = `${num} is out of range. Please enter 1-100.`;
  }

  // YOUR TURN solution: Check extremes with ||
  if (num < 10 || num > 90) {
    console.log(`${num} is an extreme value (very low or very high)`);
  } else {
    console.log(`${num} is somewhere in the middle`);
  }

});


// ************************************************************
// EXERCISE 5: RANDOM NUMBERS
// ************************************************************
// CONCEPT: Math.random() and Math.floor()

generateRandomButton.addEventListener("click", function() {

  // CONCEPT: Random number formula
  let secretNumber = Math.floor(Math.random() * 100) + 1;
  randomResult.innerHTML = `Random number (1-100): ${secretNumber}`;
  console.log("Generated 1-100:", secretNumber);

  // YOUR TURN solutions: Different ranges
  let smallRandom = Math.floor(Math.random() * 10) + 1;   // 1-10
  let diceRoll = Math.floor(Math.random() * 6) + 1;       // 1-6

  console.log("Random 1-10:", smallRandom);
  console.log("Dice roll 1-6:", diceRoll);

});
