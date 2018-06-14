function runGame(clickedId) {
  console.log(clickedId);
  let tie = "It's a tie!";
  let uVictory = "You win!";
  let cVictory = "Computer wins!";

  let compChoice = Math.floor(Math.random() * 3);
  let userChoice = clickedId;

  // Case computer choose rock
	if (compChoice === 0) {
		if (userChoice === 'rock') {
			printResult(userChoice, compChoice, tie);
		} else if (userChoice === 'paper') {
			printResult(userChoice, compChoice, uVictory);
		} else {
			printResult(userChoice, compChoice, cVictory);
		}
	}

	// Case computer chooses paper
	 else if (compChoice === 1) {
		if (userChoice === 'rock') {
			printResult(userChoice, compChoice, cVictory);
		} else if (userChoice === 'paper') {
			printResult(userChoice, compChoice, tie);
		} else {
			printResult(userChoice, compChoice, uVictory);
		}
	}

	// Case computer chooses scissors
	else {
		if (userChoice === 'rock') {
			printResult(userChoice, compChoice, uVictory);
		} else if (userChoice === 'paper') {
			printResult(userChoice, compChoice, cVictory);
		} else {
			printResult(userChoice, compChoice, tie);
		}
	}
}

function printResult(uChoice, cChoice, result) {
	let converted = '';
	if (cChoice === 0) {
		converted = 'rock';
	} else if (cChoice === 1) {
		converted = 'paper';
	} else {
		converted = 'scissors';
	}

  document.getElementById("p1").innerHTML = "You chose: " + uChoice;
	document.getElementById("p2").innerHTML = "Computer chose: " + converted;
	document.getElementById("p3").innerHTML = result;
  document.getElementById("p4").innerHTML = "To play again, just click a button";
}
