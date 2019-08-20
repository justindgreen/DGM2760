if (name === "" || name === "null") {
	greetingString = "Welcome! We hope you enjoy your stay!";
} else {
	greetingString = "Welcome " + name + "! We hope you enjoy your stay!";
}

document.querySelector('#company').innerText = "Joe's Bed and Breakfast";
document.querySelector('#slogan').innerText = "Best B&B this side of Vernal!";
document.querySelector('#greeting').innerText = greetingString;

let theDate = new Date();
document.querySelector('#todaysDate').innerText = "Today is " + theDate.toLocaleDateString();