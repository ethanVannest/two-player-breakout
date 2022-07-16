console.log('this works')
const startGame = () => {

}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = canvas.width/2;
var y = canvas.height-80;
let dx = 2;
let dy = -2;

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    x += dx;
    y += dy;
}
setInterval(draw, 10);
// ctx.beginPath();
// ctx.arc(50, 50, 10, 0, Math.PI*2);
// ctx.fillStyle = "#0095DD";
// ctx.fill();
// ctx.closePath();
// let x = canvas.width/2;
// let y = canvas.height-30;

function drawBall() {
    ctx.beginPath();
    ctx.arc(x, y, 10, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawBall();
    x += dx;
    y += dy;
}


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