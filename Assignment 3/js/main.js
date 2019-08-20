document.querySelector('#name').innerText = "Guessing Game";
document.querySelector('#slogan').innerText = 'Loops';
document.querySelector('#pageTitle').innerText = "Hi/Lo Guessing Game";

// pick a random number between 0 and 16

const correctNumber = Math.floor(1 + Math.random() * 15);
console.log(correctNumber);

let guessed = false;
let totalGuesses = 0;
let gamerGuess = 0;

function evalGuess() {

	if (guessed === false) {
		totalGuesses++;
		gamerGuess = document.querySelector('#guess').value;
		const feedback = document.querySelector('#feedback');

		if (gamerGuess == correctNumber) {
			feedback.innerText = 'You are Correct';
			giveAward();
		} else if (gamerGuess > correctNumber && gamerGuess < 16) {
			feedback.innerText = 'Your Guess was Too High';
		} else if (gamerGuess < correctNumber && gamerGuess > 0) {
			feedback.innerText = 'Your Guess was Too Low';
		} else {
			feedback.innerText = 'Please choose a number between 1 and 15 and try again';
			totalGuesses--;
		}
		if (totalGuesses > 0) {
			document.querySelector('#attempts').innerText = totalGuesses;
		}
	} else {
		feedback.innerText = 'If you would like to play again, refresh the page.';
	}
}

function giveAward() {
	guessed = true;
    
    document.querySelector('#totalAttempts').innerText = `You got it in ${totalGuesses} guesses!`;
	
    switch (true) {
		case (totalGuesses < 4):
			ribbonAwarded = "images/blueRibbon.png";
			break;
		case (totalGuesses < 7):
			ribbonAwarded = "images/redRibbon.png";
			break;
		case (totalGuesses > 6):
			ribbonAwarded = "images/yellowRibbon.png";
			break;
	}

	const awardImage = document.createElement('img');
	awardImage.setAttribute('src', ribbonAwarded);
	const ribbon = document.querySelector('#ribbon');
    ribbon.appendChild(awardImage);
}