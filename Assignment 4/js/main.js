document.querySelector('#company').innerText = "Fortune Teller";
document.querySelector('#slogan').innerText = "Switch Statements";

function fortune() {
	let month = getRandomIntInclusive(1, 12);
	const monthName = getMonthName(month);

	let fate = getRandomIntInclusive(1, 5);
	const fateSelected = getFate(fate);
	
	let lastDay = 31;
	
	if (month == 4 || month == 6 || month == 9 || month == 11) {
        lastDay = 30;
    } else if (month ==2) {
		lastDay = 28;
	}
	
	let day = getRandomIntInclusive(1, lastDay);
	const daySuffix = getDay(day);

	const fortuneRevealed = `On ${monthName} ${day}${daySuffix} ${fateSelected}`;

	document.querySelector('#fortune').innerText = fortuneRevealed;
}

function getRandomIntInclusive(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getMonthName(month) {
	let name;
	switch (month) {
		case 1:
			name = "January";
			break;
		case 2:
			name = "February";
			break;
		case 3:
			name = "March";
			break;
		case 4:
			name = "April";
			break;
		case 5:
			name = "May";
			break;
		case 6:
			name = "June";
			break;
		case 7:
			name = "July";
			break;
		case 8:
			name = "August";
			break;
		case 9:
			name = "September";
			break;
		case 10:
			name = "October";
			break;
		case 11:
			name = "November";
			break;
		case 12:
			name = "December";
			break;
		default:
			name = "Not a month";
			break;
	}
	return name;
}

function getDay(day) {
    let suffix;
	switch (day) {
        case 1:
		case 21:
		case 31:	
			suffix = 'st';
			break;
		case 2:
		case 22:	
			suffix = 'nd';
			break;
		case 3:
		case 23:
			suffix = 'rd';
			break;
		case 4:
		case 5:
		case 6:
		case 7:
		case 8:
		case 9:
		case 10:
		case 11:
		case 12:
		case 13:
		case 14:
		case 15:
		case 16:
		case 17:
		case 18:
		case 19:
		case 20:
		case 24:
		case 25:
		case 26:
		case 27:
		case 28:
		case 29:
		case 30:
			suffix = 'th';
			break;
		default:
			suffix = '';
			break;
    }
	return suffix;
}

function getFate(fate) {
	let message;
	switch (fate) {
		case 1:
			message = 'a dream you have will come true.';
			break;
		case 2:
			message = 'you will conquer obstacles to achieve success.';
			break;
		case 3:
			message = 'keep your eye out for someone special.';
			break;
		case 4:
			message = 'serious trouble will bypass you.';
			break;
		case 5:
			message = 'your shoes will make you happy.';
			break;
		default:
			message = 'Some sort of error occured.';
			break;
	}
	return message;
}