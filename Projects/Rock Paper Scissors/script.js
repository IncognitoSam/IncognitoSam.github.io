const playGame = () => {
	// Get user's choice from prompt and random computer choice
	let validChoice = false;
	let userChoice = "";
	let input = "";
	let inputWarning = "";
	const uVictory = "You win!";
	const cVictory = "Computer wins!";
	const tie = "It's a tie!";

	// Loop to ensure valid choice
	while (!validChoice) {
		input = prompt(inputWarning + "Rock, paper or scissors?");
		userChoice = input.toLowerCase();

		if (userChoice  === 'rock' || userChoice === 'paper' || userChoice === 'scissors') {
			validChoice = true;
		} else {
			inputWarning = "Invalid input.\n";
		}
	}

	let compChoice = Math.floor(Math.random() * 3);
	// document.write(compChoice);

	// Case computer chooses rock
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

const printResult = (uChoice, cChoice, result) => {
	let converted = '';
	if (cChoice === 0) {
		converted = 'rock';
	} else if (cChoice === 1) {
		converted = 'paper';
	} else {
		converted = 'scissors';
	}

	document.getElementById("l1").innerHTML = "You chose: " + uChoice;
	document.getElementById("l2").innerHTML = "Computer chose: " + converted;
	document.getElementById("l3").innerHTML = result;
}

playGame();