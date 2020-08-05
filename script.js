var startButton = document.querySelectorAll("button");
var questionEl = document.querySelectorAll("p");
var answerEl = document.getElementById("answerChoices");

var partsOfQuestions = ["question", "option1", "option2", "option3", "option4", "answer"]


// The array of question objects for the game 
var questionAnswer = [
    {"question1" : "Commonly used data types DO NOT include:", 
    "option1":"1. Strings",
    "option2":"2. Booleans",
    "option3":"3. Alerts",
    "option4":"4. Numbers",
    "answer":"option2"  },

    {"question": "The condition in an if/else statement is enclosed within:", 
    "option1":"1. Quotes",
    "option2":"2. Curly Brackets",
    "option3":"3. Parentheses",
    "option4":"4. Square Brackets",
    "answer": "option3" },
    
    {"question": "Arrays in Javascript can be used to store:", 
    "option1":"1. Numbers and Strings",
    "option2":"2. Other Arrays",
    "option3":"3. nBooleans",
    "option4":"4. All of the above,",
    "answer": "option4" },
    
    {"question": "String values must be enclosed within ____ when being assigned to variables:", 
    "option1":"1. Commas",
    "option2":"2. Curly Brackets",
    "option4":"3. Quotes",
    "option5":"4. Parentheses",
    "answer": "option2" },
    
    {"question": "A very useful tool used during development and debugging for printing content to the debugger is:", 
    "option1":"1. JavaScript",
    "option2":"2. Terminal/Bash",
    "option3":"3. For Loops",
    "option4":"4. Console.Log",
    "answer": "option3" },
];


// //pulls all five objects
for (var i = 0; i < questionAnswer.length; i++){
    console.log(questionAnswer)
}

//pulls first question
console.log(JSON.stringify(questionAnswer[0]))

// // Function pulls first question
function startGame () {
firstQuestion = questionAnswer.shift();
console.log(firstQuestion)
};

startGame();

