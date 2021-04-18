var canvas;
var database;
var gameState = 0, contestantCount, quiz, question, person, allPeople;
var backColor = "red";


function setup(){
  database = firebase.database();
  canvas = createCanvas(850,400);
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background(backColor);
if(contestantCount===4){
  quiz.updateState(1);
}
  
if(gameState===1){
  quiz.play();
}
}
