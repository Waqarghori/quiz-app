var questions = [
    {
        question: "What does HTML stand for?",
        option1: "Hyperlinks and Text Markup Language",
        option2: "Hypertext Markup Language",
        option3: "Home Tool Markup Language",
        correctOption: "Hypertext Markup Language",
    },
    {
        question: "Who is making the Web standards?",
        option1: "Google",
        option2: "The World Wide Web Consortium",
        option3: "Microsoft",
        correctOption: "The World Wide Web Consortium",
    },
    {
        question: "Choose the correct HTML element for the largest heading:",
        option1: "<heading>",
        option2: "<h6>",
        option3: "<h1>",
        correctOption: "<h1>",
    },
    {
        question: "What is the correct HTML element for inserting a line break?",
        option1: "<linebreak>",
        option2: "<br>",
        option3: "<break>",
        correctOption: "<br>",
    },
    {
        question: "What is the correct HTML for adding a background color?",
        option1: '<body bg="yellow">',
        option2: "<background>yellow</background>",
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">',
    },
    {
        question: "Choose the correct HTML element to define important text:",
        option1: "<strong>",
        option2: "<b>",
        option3: "<i>",
        correctOption: "<strong>",
    },
    {
        question: "Choose the correct HTML element to define emphasized text:",
        option1: "<italic>",
        option2: "<i>",
        option3: "<em>",
        correctOption: "<em>",
    },
    {
        question: "What is the correct HTML for creating a hyperlink?",
        option1: "<a>http://www.w3schools.com</a>",
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>',
    },
];

function startQuiz(){
    let startQ = document.querySelector(".container")
    let quizIntr = document.getElementById("quizInt")
    startQ.style.display = "block"
    quizIntr.style.display = "none"
    startTimer()
    
}

let ques = document.getElementById("ques");
let opt1 = document.getElementById("opt1");
let opt2 = document.getElementById("opt2");
let opt3 = document.getElementById("opt3");
let correct = document.getElementById("correct");
let correctOpt = document.getElementById("correctOpt");
let btn = document.getElementById("btn");
let index = 0;
let score = 0;
let result;
let icon;
function nextQuestion() {

    var getInputs = document.getElementsByTagName('input')
    if (correctOpt.checked) {
        score += 12.5;
        let abc = Math.floor(score);
    } if (score >= 70) {
        result = "Passed"
        icon = "success"
    } else {
        result = "faild"
        icon = "error"
    }

    for (var i = 0; i < getInputs.length; i++) {
        getInputs[i].checked = false
    }

    if (index > questions.length - 1) {
        Swal.fire({
            title: 'Quiz End!',
            html: `
               <strong>Your result is ${result}</strong><br>
               your scrore is ${score}<br><br>
               <em>thanks for participation!</em>
             `,
            icon: icon,
            confirmButtonText: 'Go Back'
        }).then((score) => {
            if (score.isConfirmed) {
                location.reload();
            }
        });
    } else {
        ques.innerText = questions[index].question;
        opt1.innerText = questions[index].option1;
        opt2.innerText = questions[index].option2;
        opt3.innerText = questions[index].option3;
        correct.innerText = questions[index].correctOption
        index++

    }

    btn.disabled = true
}
nextQuestion()

function btnWork() {
    btn.disabled = false
}


let getMin = document.querySelector(".min")
let getSec = document.querySelector(".sec")
let min = 0;
let sec = 0;
let timmerVar;
function startTimer(){
  timmerVar = setInterval(function () {
    sec++
    if (sec > 59) {
        min++
        sec = 0;
    } if (min >= 1) {
        endTimmer()
    }
    getSec.innerText = sec
    getMin.innerHTML = min;

    
}, 1000)
}

function endTimmer() {
    clearInterval(timmerVar)
    Swal.fire({
        title: 'Time is Over!',
        html: `
           <strong>Your result is ${result}</strong><br>
           your scrore is ${score}<br><br>
           <em>thanks for participation!</em>
         `,
        icon: icon,
        confirmButtonText: 'Go Back'
    }).then((score) => {
        if (score.isConfirmed) {
            location.reload();
        }
    });


}