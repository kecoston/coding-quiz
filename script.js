var startButton = document.querySelectorAll("#answerChoices");
var questionEl = document.querySelectorAll("p");
var answerEl = document.querySelectorAll("answerChoices");

// The array of question objects for the game 
var questionAnswer = [
    {question: "Commonly used data types DO NOT include:", 
    answer1:"1. Strings",
    answer2:"2. Booleans",
    answer3:"3. Alerts",
    answer4:"4. Numbers"  },

    {question: "The condition in an if/else statement is enclosed within:", 
    answer1:"1. Quotes",
    answer2:"2. Curly Brackets",
    answer3:"3. Parentheses",
    answer4:"4. Square Brackets" },
    
    {question: "Arrays in Javascript can be used to store:", 
    answer1:"1. Numbers and Strings",
    answer2:"2. Other Arrays",
    answer3:"3. Booleans",
    answer4:"4. All of the above," },
    
    {question: "String values must be enclosed within ____ when being assigned to variables:", 
    answer1:"1. Commas",
    answer2:"2. Curly Brackets",
    answer4:"3. Quotes",
    answer5:"4. Parentheses" },
    
    {question: "A very useful tool used during development and debugging for printing content to the debugger is:", 
    answer1:"1. JavaScript",
    answer2:"2. Terminal/Bash",
    answer3:"3. For Loops",
    answer4:"4. Console.Log" },
];

function startGame () {
firstQuestion = questionAnswer.shift();
console.log(firstQuestion)
}


startGame();

