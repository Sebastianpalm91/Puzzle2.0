//Declaring my variables
const puzzleCard = document.querySelectorAll('.puzzle');
const readyGo = document.querySelector('.readyGo');
const resetGame = document.querySelector('button');
const body = document.querySelector('body');
const bounce = document.querySelector('.bounce');
const container = document.querySelector('.puzzleContainer');
const boxShadow = document.querySelectorAll('boxShadow');
const startTimer = document.querySelector('.startTimer')
const highScore = document.querySelector('.highScore');
const shuffle = document.querySelector('.shuffle');
const scoreList = document.querySelector('li');
const audioPlay = document.querySelector('audio')
const puzzleList = Array.from(puzzleCard);
// Clock timer
var time = document.getElementsByTagName('h2')[0],
seconds = 0, minutes = 0,
t;
//Creating empty Arrays and a scorecounter
let puzzleArray = [];
let completed = [];
let cardSucces = 0;
let timerScore = [];
