console.log("this works");
var drawInt;
var twoPlayerInt;
var playerOneName;
var playerTwoName;
var paddleX;
const startButton = document.getElementById("start-game");
startButton.addEventListener("click", (event) => {
  playerOneName = prompt("Player One Name?");
  if (playerOneName === "") {
    let playerOneName = "Player One";
  }
  playerTwoName = prompt("Player Two Name?");
  if (playerTwoName === "") {
    let playerTwoName = "Player Two";
  }
  document.getElementById("player1").innerText = playerOneName;
  document.getElementById("player2").innerText = playerTwoName;
  // setInterval(winConditions.checkGameTime(),1000)
  // drawInterval();
  drawInt = setInterval(draw, 10);
});

class Win {
  constructor() {
    this.playerOneScoreID = document.getElementById("player1_score");
    this.playerTwoScoreID = document.getElementById("player2_score");
    this.currentId = this.playerOneScoreID;
    this.playerOneScore = 0;
    this.playerTwoScore = 0;
    this.gameTime = 0;
    this.setPlayer = this.playerOneScore;
    startButton.addEventListener("click", function () {
      let twoPlayerInt = setInterval(() => {
        winConditions.setPlayer++;
        winConditions.playerOneScore = winConditions.setPlayer;
        winConditions.currentId.innerText = `Score: ${winConditions.setPlayer}`;
      }, 1000);
    });
  }
  checkScore() {
    if (this.playerOneScore > this.playerTwoScore) {
      alert(`${playerOneName} Wins!`);
    } else if (this.playerOneScore === this.playerTwoScore) {
      alert("It is a DRAW!");
    } else {
      alert(`${playerTwoName} Wins!`);
    }
  }
}
const winConditions = new Win();

class Game {
  constructor() {
    this.canvas = document.getElementById("canvas");
    //"canvas" is what is allowing the ball to be drawn on
    this.canvasContext = this.canvas.getContext("2d");
    //paints stores the variable to paint on the canvas
    this.drawnX = 2;
    this.drawnY = -2;
    this.ballRadius = 10;
  }
}
const game = new Game();
class Paddle {
  constructor() {
    this.rightPressed = false;
    this.leftPressed = false;
    this.paddleHeight = 20;
    this.paddleWidth = 120;
    this.paddleX = (game.canvas.width - this.paddleWidth) / 2;
    this.moveRight = false;
    this.moveLeft = false;
  }
}
const paddle = new Paddle();

var brick = [];
var canvasX = this.canvas.width / 2;
var canvasY = this.canvas.height - 130;
var bRow = 7;
var bColumn = 5;
var bHeight = 40;
var bWidth = 120;
var bPadding = 20;
var bMargTop = 20; //this is the space from the top of the padding the brick has
var bMargLeft = 20;
//the space to the left of the brick outside of the padding
// console.log(game.canvas.width)
// let brickLoop =() => {
for (var i = 0; i < bRow; i++) {
  brick[i] = [];
  for (var j = 0; j < bColumn; j++) {
    brick[i][j] = { canvasX: 0, canvasY: 0, hp: 1 };
    var b = brick[i][j];
  }
}

// bricks.brick = {x:0, y:0}
// }
//IF playerOne score and Playertwo score is greater than zero
// function clearGame() {
// if (winConditions.playerOneScore > winConditions.playerTwoScore && winConditions.playerTwoScore === 0) {
//     //RESET blocks
//         bricks.brick[i][j].hp = 1;
//         winConditions.setPlayer = playerTwoScore;
//         }
//     }
//RESET scores to zero
//RETURN to main screen
//ELSE then
//RESET blocks
//SWITCH player score
// function restartGame (checkScore){
//     if()
// }

function drawPaddle() {
  game.canvasContext.beginPath();
  game.canvasContext.rect(
    paddle.paddleX,
    game.canvas.height - paddle.paddleHeight,
    paddle.paddleWidth,
    paddle.paddleHeight
  );
  //the .rect method creates a rectangle taking
  //takes parameters that take the dimmensions of the paddle
  //returns color to canvas
  game.canvasContext.fillStyle = "#1B1B1B";
  game.canvasContext.fill();
  game.canvasContext.closePath();
}
const checkForPlayerTwo = (event) => {
  if (winConditions.playerTwoScore === 0 && winConditions.playerOneScore > 0) {
    for (el = 0; el < 1; el++) {
      alert(`Ball missed the paddle! Up next is ${playerTwoName}!`);
    }
    for (let i = 0; i < bColumn; i++) {
      for (let j = 0; j < bRow; j++) {
        let b = brick[j][i];
        b.hp = 1;
      }
    }
    winConditions.playerTwoScore = winConditions.setPlayer;
    winConditions.setPlayer = 0;
    winConditions.currentId = winConditions.playerTwoScoreID;
    paddle.paddleX = 440;
    canvasX = game.canvas.width / 2;
    canvasY = this.canvas.height - 130;
    game.drawnY = -game.drawnY;
  } else if (
    winConditions.playerOneScore > 0 &&
    winConditions.playerTwoScore > 0
  ) {
    alert("GAME OVER");
    location.reload();
    clearInterval(drawInt);
    winConditions.checkScore();
  }
};

let blockCount = 35;
function collisionDetection() {
  for (let i = 0; i < bColumn; i++) {
    for (let j = 0; j < bRow; j++) {
      let b = brick[j][i];
      // console.log(b)
      // calculations
      if (b.hp === 1) {
        if (
          canvasX > b.canvasX &&
          canvasX < b.canvasX + bWidth &&
          canvasY > b.canvasY &&
          canvasY < b.canvasY + bHeight
        ) {
          game.drawnY = -game.drawnY;
          b.hp = 0;
          blockCount--;
        }
      }
    }
  }
}
//if the brick arrays hp is zero and players one score is greater than one and player two score is zero
//switch player score count to player two
//add 1 to brick array hp
//if brick array hp is zero and player one score is greater than zero and player two score is greater than zero
//  alert("GAME OVER")
// location.reload()
// clearInterval(drawInt)
// winConditions.checkScore()
function drawBricks() {
  // brickLoop()
  for (let i = 0; i < bRow; i++) {
    for (let j = 0; j < bColumn; j++) {
      if (brick[i][j].hp === 1) {
        console.log("BRICK hp", brick[i][j].hp);
        let brickX = i * (bWidth + bPadding) + bMargLeft;
        //when itterated over this multiplies each of the values by its corresponding amount so that the bricks are equal distance apart
        let brickY = j * (bHeight + bPadding) + bMargTop;
        //similar idea of multiplying by each iteration
        brick[i][j].canvasX = brickX;
        brick[i][j].canvasY = brickY;
        game.canvasContext.beginPath();
        game.canvasContext.rect(brickX, brickY, bWidth, bHeight);
        game.canvasContext.fillStyle = "#1B1B1B";
        game.canvasContext.fill();
        game.canvasContext.closePath();
      }
      // else if (bricks.brick[i][j].hp === 0 && game.playerOneScore > 0){
      //     game.canvasContext.rect(brickX,brickY,bricks.bWidth,bricks.bHeight)
      //     checkForPlayerTwo()

      //SHOULD RESET THE BRICKS AFTER THEY ARE BROKEN
    }
  }
}
function drawBall() {
  game.canvasContext.beginPath();
  //Starts a line from the given point
  game.canvasContext.arc(canvasX, canvasY, game.ballRadius, 0, Math.PI * 2);
  //creates the shape of the circle
  game.canvasContext.fillStyle = "#1B1B1B";
  game.canvasContext.fill();
  //Fills colors and given color
  game.canvasContext.closePath();
  //Makes a trail back to the original starting point
}
const brickLoop = () => {
  for (let i = 0; i < bColumn; i++) {
    for (let j = 0; j < bRow; j++) {
      brick[i][j] = { canvasX: 0, canvasY: 0, hp: 1 };
      let b = brick[j][i];
    }
  }
};
const switchPlayerTwo = () => {
  console.log(brick.hp);
  console.log(blockCount);
  if (
    winConditions.playerOneScore > 0 &&
    winConditions.playerTwoScore === 0 &&
    blockCount === 0
  ) {
    //trying to get the hp value for all bricks
    for (el = 0; el < 1; el++) {
      alert(`All bricks broken! Up next is ${playerTwoName}!`);
    }
    blockCount = 35;
    winConditions.playerTwoScore = winConditions.setPlayer;
    winConditions.setPlayer = 0;
    winConditions.currentId = winConditions.playerTwoScoreID;
    paddle.paddleX = 440;
    canvasX = game.canvas.width / 2;
    canvasY = this.canvas.height - 130;
    game.drawnY = -game.drawnY;
    b.hp = 1;
  } else if (
    winConditions.playerOneScore > 0 &&
    winConditions.playerTwoScore > 0 &&
    blockCount === 0
  ) {
    //trying to get the hp value for all bricks
    alert("GAME OVER");
    location.reload();
    clearInterval(drawInt);
    winConditions.checkScore();
  }
};

document.addEventListener("keydown", keydown);
document.addEventListener("keyup", keyup);
// console.log(paddle.rightPressed)
function keydown(e) {
  if (e.code === "ArrowRight") {
    paddle.rightPressed = true;
    // console.log(paddle.rightPressed)
  } else if (e.code === "ArrowLeft") {
    paddle.leftPressed = true;
  }
}
function keyup(e) {
  if (e.code === "ArrowRight") {
    paddle.rightPressed = false;
    // console.log(e.code)
  } else if (e.code === "ArrowLeft") {
    // console.log(e.code)
    paddle.leftPressed = false;
  }
}

function draw() {
  game.canvasContext.clearRect(0, 0, game.canvas.width, game.canvas.height);
  //clear rect clears a solid line that would be left behind the ball moving
  drawBall();
  drawPaddle();
  drawBricks();
  collisionDetection();
  switchPlayerTwo();
  if (
    canvasX + game.drawnX > game.canvas.width - game.ballRadius ||
    canvasX + game.drawnX < game.ballRadius
  ) {
    //Uses logical operator to add another layer of measuremeant to tell the code to send the ball the other way if the game drawn x -axis is less than the radius of the ball *this prevents the ball from disappearing halfway off the screen*
    game.drawnX = -game.drawnX;
    //this says that if the ball is touching the left or right side of the canvas then it is reversed
  }
  if (canvasY + game.drawnY < game.ballRadius) {
    game.drawnY = -game.drawnY;
  }
  //             }
  else if (canvasY + game.drawnY > game.canvas.height - game.ballRadius) {
    if (
      canvasX > paddle.paddleX &&
      canvasX < paddle.paddleX + paddle.paddleWidth
    ) {
      if ((canvasY = canvasY - paddle.paddleHeight)) {
        game.drawnY = -game.drawnY;
      }
    } else {
      // for (el = 0; el < 1; el++){
      //     alert(`Ball missed the paddle! Up next is ${playerTwoName}!`)
      // }
      checkForPlayerTwo();
    }
  }
  //canvasY + game.drawnY > game.canvas.height-game.ballRadius
  // if(canvasY + game.drawnY > game.canvas.height-game.ballRadius || canvasY + game.drawnY < game.ballRadius) {
  //     game.drawnY = -game.drawnY;
  //     //if the ball is touching the top or bottom of the canvas then it is reversed
  // }

  // console.log(game.canvas.height)
  // //doesnt work ball goes straight through the paddle
  // else if(canvasY + game.drawnY> game.canvas.height - ballRadius){
  //     if (game.drawnY + canvasY < game.ballRadius){
  //         game.drawnY = -game.drawnY
  //     }
  //      if (game.drawnY > game.canvas.height-game.ballRadius) {
  //         if (game.canvasX > paddle.paddleX && game.canvasX < paddle.paddleWidth + paddle.paddleX) {
  //             game.drawnY = -game.drawnY
  //         }
  //     }
  // }
  //Doesnt work it keeps the ball below the paddle
  if (paddle.rightPressed) {
    paddle.paddleX += 4;
    if (paddle.paddleX > 880) {
      paddle.paddleX = 880;
    }
    // console.log(paddle.paddleX)
  } else if (paddle.leftPressed) {
    paddle.paddleX -= 4;
    if (paddle.paddleX < 0) {
      paddle.paddleX = 0;
    }
  }
  canvasX += game.drawnX;

  canvasY += game.drawnY;
}
// }
//DEFINE function called start screen
// change screen to actual game
//DEFINE function called start game
//WHEN clicked start game
//ASK for player one name
//IF empty name player one
//END if
//ASK (after player one) as for player two name
//IF name is empty use name 'Player two'
//maybe* add a count down from three to actually begin the game
//End Start game
//SET intereval for every second that passes add 5 Points to whoever is playing at the time
//everytime that a box is touched/broken add 10 points to whoever is up at the time
//IF time reaches 40 seconds
//THEN display message that says times up...Switching to player two
//RESET blocks
//RESET timer
//change score to player two but KEEP player one on the screen
//END IF

//MAKE mouse move along within a certain box on the page
//WITHIN that box move a paddle only horizontal following mouse
//ON game start
//START WITH ball on the paddle then send it out straight
//ADD ball collision
//walls do not break
//bricks break and dissapear for 3 seconds and come back in the same place they dissapeared from
//AFTER PLAYER TWOs 40 seconds are up
//BLUR game
//bring up a .6 opacity end game screen that shows who won and shows two buttons
//BUTTON ONE is go home which takes you to the start game screen
//BUTTON TWO is to restart the game and to call the function
//IF playerOneScore is equal to playerTwoScore
//change the innertext of the id of game win message to player two and one are tied
//ELSE IF playerOneScore is greater than playerTwoScore
//change innerText of id game win message to player One wins
//ELSE
//change innerText of id game win message to PlayerTwo wins
//END IF
//DEFINE function backToStart
//changes screen to original start game screen
//END function
//ADD button that when clicked will call the function startGame() on the game end screen
//ADD event listener for a click
//startGame()
//startScreen()
//backToStart()

//END event listner for click
