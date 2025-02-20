let ranNum = Math.ceil(Math.random() * 20);
console.log(`The number is: ${ranNum}`);

let guess = 21;
let numOfGuess = 0;

while (guess !== ranNum) {

  guess = +prompt("Guess a number between 1 and 20", "1 through 20");
  
  console.log(guess);
  
  if (guess !== ranNum) {
    if (guess > ranNum) {
      alert("Too high"); 
    } else {
      alert("Too low");
    };
  };

  numOfGuess++;

  if (guess === ranNum) {
    console.log(`It took you ${numOfGuess} guesses`);
    break;
  }

};

switch (true) {

  case numOfGuess <= 3:
    alert("You guessed in under three or less tries!");
    break;
  case numOfGuess >= 7:
    alert("It took you more than seven tries...");
    break;

}