var canvas;
var gameState = 0;
var contestantCount;
var database;
var quiz;
var question;
var contestant;

function setup(){
  canvas = createCanvas(850,400);
  var database = firebase.database();
  quiz = new Quiz;
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(playerCount === 4){
    gameState.update(1);
  }

  if(gameState === 1){
    clear();
    quiz.play();
  } 

}
