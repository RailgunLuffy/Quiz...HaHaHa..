const quizData = [
    {
        question: 'Independence Day of Myanmar?',
        choices: {
            a: '1945',
            b: '1946',
            c: '1947',
            d: '1948'
        },
        answer: 'd'
    },

    {
        question: 'Birth Month of General Aung San?',
        choices: {
            a: 'Jan',
            b: 'Feb',
            c: 'Mar',
            d: 'Apr'
        },
        answer: 'b'
    },

    {
        question: 'Main Character of One Piece?',
        choices: {
            a: 'Roger',
            b: 'Naruto',
            c: 'Luffy',
        },
        answer: 'c'
    },

    {
        question: "Naruto's Birhday?",
        choices: {
            a: 'Oct 10',
            b: 'Nov 19',
            c: 'Jan 28',
        },
        answer: 'a'
    },

    {
        question: "Jotaro's Mom?",
        choices: {
            a: 'Hinata',
            b: 'Lisa Lisa',
            c: 'Suzi Q',
            d: 'Holy Kujo'
        },
        answer: 'd'
    },

    {
        question: "After time skip, Nico Robin's cup size is...",
        choices: {
            a: 'C',
            b: 'F',
            c: 'J',
            d: 'I',
            e: 'E'
        },
        answer: 'c'
    },

    {
        question: "Zoro's boob size is ... cm.",
        choices: {
            a: '150',
            b: '89',
            c: '135',
            d: '98',
            e: '110'
        },
        answer: 'e'
    }
]

const questionDiv = document.getElementById('question')
const choicesDiv = document.getElementById('choices')
const startBtn = document.getElementById('start')

let currentQuiz = 0
let score = 0

const showQuiz = (quiz) => {
    questionDiv.innerHTML = `<h2>${quiz.question}</h2>`

    choicesDiv.innerHTML = ''
    Object.keys(quiz.choices).forEach((choice) => {
        choicesDiv.innerHTML += `
        <div class="choice">
        <input type="radio" id="${choice}" name="quiz_choices" value="${choice}">
        <label for="${choice}">${quiz.choices[choice]}</label>
        </div>`
    })
}

const isSelectedChoiceOldWay = () => {
    const selectedChoice = document.getElementsByName('quiz_choices')

    for (let choice of selectedChoice) {
        if (choice.checked) {
            return choice
        }
    }

    return null
}

const isSelectedChoice = () => {
    const selectedChoice = document.querySelector('input[name="quiz_choices"]:checked')

    return selectedChoice
}

const caculateScore = (choice) => {

    if (choice.value == quizData[currentQuiz].answer)
        score++
}

const showScore = () => {
    document.getElementById('quiz').innerHTML = `<h2>Your Score: ${score} / ${quizData.length}</h2><button class="submit-btn" onclick="location.reload()">Re-Start</button>`
}

// showQuiz(quizData[currentQuiz])

startBtn.addEventListener('click', (e) => {
    document.getElementById('btn-div').innerHTML = '<button id="submit" class="submit-btn" onclick="submitQuiz()">Submit</button>'

    submitBtn = document.getElementById('submit')
    showQuiz(quizData[currentQuiz])
})

// submitBtn.addEventListener('click', (e) => {
//     const chosenChoice = isSelectedChoice()

//     if (chosenChoice) {
//         caculateScore(chosenChoice)

//         currentQuiz++

//         currentQuiz < quizData.length ? showQuiz(quizData[currentQuiz]) : showScore()
//     }
// })

const submitQuiz = () => {
    const chosenChoice = isSelectedChoice()

    if (chosenChoice) {
        caculateScore(chosenChoice)

        currentQuiz++

        currentQuiz < quizData.length ? showQuiz(quizData[currentQuiz]) : showScore()
    }
}
