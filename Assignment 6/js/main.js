document.querySelector('#company').innerText = "Nonsense Story";
document.querySelector('#slogan').innerText = "String Manipulation";

const variables = document.querySelectorAll("textarea");

const modal = document.querySelector("#myModal");

const tellStory = () => {

    let variablesList = [];

    variables.forEach(entry => {
        variablesList.push(entry.value);
    }
    );

    let nounArray = variablesList[0].toLowerCase().split(/\s+/);
    let roomArray = variablesList[1].toLowerCase().split(/\s+/);
    let applianceArray = variablesList[2].toLowerCase().split(/\s+/);
    let adjectiveArray = variablesList[3].toLowerCase().split(/\s+/);
    let colorArray = variablesList[4].toLowerCase().split(/\s+/);
    let liquidArray = variablesList[5].toLowerCase().split(/\s+/);
    let verbArray = variablesList[6].toLowerCase().split(/\s+/);
    let furnitureArray = variablesList[7].toLowerCase().split(/\s+/);
    let numberArray = variablesList[8].toLowerCase().split(/\s+/);

    let errorMessage = "";

    if (nounArray.length < 5) {
        errorMessage += "Please enter more nouns. \n"
    }
    if (roomArray.length < 2) {
        errorMessage += "Please enter more rooms. \n"
    }
    if (applianceArray[0] == "") {
        errorMessage += "Please enter more appliances. \n"
    }
    if (adjectiveArray.length < 7) {
        errorMessage += "Please enter more adjectives. \n"
    }
    if (colorArray.length < 2) {
        errorMessage += "Please enter more colors. \n"
    }
    if (liquidArray[0] == "") {
        errorMessage += "Please enter more liquids. \n"
    }
    if (verbArray.length < 3) {
        errorMessage += "Please enter more verbs. \n"
    }
    if (furnitureArray.length < 2) {
        errorMessage += "Please enter more furniture. \n"
    }
    if (numberArray.length < 3) {
        errorMessage += "Please enter more numbers. \n"
    }

    if (errorMessage !== "") {
        alert(errorMessage);
        return false;
    }

    const myStory = `One day while I, <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800011">The Cat in the Hat</a>, was <span class="inserted">${verbArray[0]}ing</span> in the <span class="inserted">${roomArray[0]}</span> a <span class="inserted">${adjectiveArray[0]} ${colorArray[0]} ${nounArray[0]}</span> fell through the roof. It immediately <span class="inserted">${verbArray[1]}ed</span> on the <span class="inserted">${furnitureArray[0]}</span> and knocked over the <span class="inserted">${applianceArray[0]}</span>, bumping into <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394823379">The Lorax</a>. After it hugged <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800011">Thing One and Thing Two</a>, it ran out the door into the  <span class="inserted">${roomArray[1]}</span> and <span class="inserted">${verbArray[2]}ed</span> a <span class="inserted">${nounArray[1]}</span> off the <span class="inserted">${furnitureArray[1]}</span>. It then knocked a glass of <span class="inserted">${liquidArray[0]}</span> off the coffee table, getting <span class="inserted">${adjectiveArray[1]}</span> <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800783">Horton the Elephant</a> more  <span class="inserted">${adjectiveArray[1]}</span>.</p><p>After <span class="inserted">${numberArray[0]}</span> minutes of chasing the <span class="inserted">${nounArray[0]}</span> through the house, I finally caught it and put it outside. It quickly climbed the nearest <span class="inserted">${nounArray[2]}</span>.  One of the <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800899">Sneetches</a> came running with a <span class="inserted">${adjectiveArray[2]} ${nounArray[3]}</span>, hoping to encourage it to come down.  Leave it to that <span class="inserted">${adjectiveArray[3]}</span> <a href="https://www.seussville.com/books/book_detail.php?isbn=9780553539066">Daisy-Head Mayzie</a> and all the <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800790">Who’s in Whoville</a> to think of bringing a <span class="inserted">${adjectiveArray[4]} ${nounArray[4]}</span>, which brought the <span class="inserted">${adjectiveArray[0]} ${colorArray[0]} ${nounArray[0]}</span> down immediately.  (Note that the  <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800790">Grinch</a> was no help here!)  It then ran off with <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800134">One Fish, Two Fish, Red Fish, Blue Fish</a>.  Whew! And to think I could have had a <span class="inserted">${colorArray[1]}</span> <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394829203">Wocket in my Pocket</a>, which might <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800295">Hop on Pop</a> <span class="inserted">${numberArray[1]}</span> times with <span class="inserted">${numberArray[2]}</span> <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394855028">Bunches of Hunches</a> and that <span class="inserted">${adjectiveArray[6]}</span> <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800387">Fox in Sox</a>, who was eating <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800165">Green Eggs and Ham</a>!</p><p>So, until the next time when I, <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800011">The Cat in the Hat</a>, see you again, be sure to remember <a href="https://www.seussville.com/books/book_detail.php?isbn=9780679875970">My Many Colored Days</a>: <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394844947">“And to Think That I Saw It on Mulberry Street!”</a> and yell <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394842554">Oh Say, Can You Say?</a>  and think <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394831299">Oh the Thinks We Can Think!</a>  At least this story wasn’t about <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800752">Bartholomew and the Oobleck</a> or <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394844848">The 500 Hats of Bartholomew Cubbins!</a>  Tomorrow I, <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800028">The Cat In the Hat, will be back</a>, because <a href="https://www.seussville.com/books/book_detail.php?isbn=9780394800943">I Can Lick 30 Tigers Today!</a>  And the moral of this story is... <a href="https://www.seussville.com/books/book_detail.php?isbn=9780679805274">Oh the Places You’ll Go!</a>  And, oh yes!  This is The Seuss, the Whole Seuss, and Nothing But the Seuss!`

    document.querySelector('#story').innerHTML = myStory;

    modal.style.display = "block";
};

document.querySelector("#tellStoryButton").onclick = () => {
    tellStory();
};

// When the user clicks on <span> (x), close the modal
document.querySelector(".close").onclick = () => {
    modal.style.display = "none";
}