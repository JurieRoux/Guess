// **Standard**
// let secret = 1;

// let answer = parseInt(prompt("Please guess the secret number (1-10)"), 10);

// // Use a while loop to keep prompting until the guess is correct
// while (answer !== secret) {
//   if (answer < secret) {
//     alert("Incorrect, too low");
//   } else {
//     alert("Incorrect, too high");
//   }

//   // Prompt again inside the loop
//   answer = parseInt(prompt("Please guess the secret number (1-10)"), 10);
// }
// alert("Correct Guess!");


// *******************************************************Random********************
//  Generate a random secret number between 1 and 10
let secret = Math.floor(Math.random() * 10) + 1;

// Initialize the answer variable in one line
let answer

// Use a while loop to keep prompting until the correct guess is made
while (true) {
    answer = prompt("Please guess the secret number (1-10)");

    // Convert the string guess to an integer
    let guess = parseInt(answer);

    // Check if the guess is correct
    if (guess === secret) {
        alert("Correct Guess!");
        break; // 
    } else if (guess < secret) {
        alert("Incorrect, too low");
    } else {
        alert("Incorrect, too high");
    }
}
alert("Game Over!");

