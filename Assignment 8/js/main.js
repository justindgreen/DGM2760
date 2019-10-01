document.querySelector('#company').innerText = "Grant's Tomb";
document.querySelector('#slogan').innerText = "Literal Objects";

const question = {
    stem: "Who is buried in Grant's Tomb?",
    options: ["Tom", "Grant", "John", "Richard"],
    correct: "Grant",
    display: () => {
        document.querySelector('#stem').textContent = question.stem
        question.shuffle(question.options)
        document.querySelectorAll('button').forEach(item => { item.textContent = question.options[item.getAttribute('id').match(/[+-]?\d+(?:\.\d+)?/g) -1] })
    },
    check: (userChoice) => {
        if (userChoice === question.correct) {
            document.querySelector(".feedback").textContent = "You are Correct!"
        }
        else {
            document.querySelector(".feedback").textContent = "Incorrect. Please try again!"
        }
    },
    shuffle: (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex
        while (currentIndex) {
            randomIndex = Math.floor(Math.random() * currentIndex)
            currentIndex -=1

            temporaryValue = array[currentIndex]
            array[currentIndex] = array[randomIndex]
            array[randomIndex] = temporaryValue
        }
        return array
    }
}

document.querySelectorAll('button').forEach(item => { item.addEventListener('click', () => { question.check(item.textContent) }) })

question.display()