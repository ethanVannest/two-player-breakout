console.log('this works')
const startGame = () => {
    let playerOneName = prompt("Player One Name?")
    let playerTwoName = prompt("Player Two Name?")
    setInterval(draw, 10); 
}
document.addEventListener('click', startGame)
class Game{
    constructor(){
        this.canvas = document.getElementById("canvas");
        //"canvas" is what is allowing the ball to be drawn on
        this.canvasContext = this.canvas.getContext("2d");
        //paints stores the variable to paint on the canvas
        this.canvasX = this.canvas.width/2;
        this.canvasY = this.canvas.height-80;
        this.drawnX = 2;
        this.drawnY = -2;
        this.ballRadius = 10;
    }
}
const game = new Game
// console.log(game.canvas.width)
function drawBall() {
    game.canvasContext.beginPath();
    //Starts a line from the given point
    game.canvasContext.arc(game.canvasX, game.canvasY, game.ballRadius, 0, Math.PI*2);
    //creates the shape of the circle
    game.canvasContext.fillStyle = '#1B1B1B'
    game.canvasContext.fill()
    //Fills colors and given color
    game.canvasContext.closePath();
    //Makes a trail back to the original starting point
    
}

function draw() {
    game.canvasContext.clearRect(0, 0, game.canvas.width, game.canvas.height);
    drawBall();
    game.canvasX += game.drawnX;

    game.canvasY += game.drawnY;
    if(game.canvasX + game.drawnX > game.canvas.width-game.ballRadius || game.canvasX + game.drawnX < game.ballRadius) {
        //Uses logical operator to ch
        game.drawnX = -game.drawnX;
    }
    
    if(game.canvasY + game.drawnY > game.canvas.height-game.ballRadius || game.canvasY + game.drawnY < game.ballRadius) {
        game.drawnY = -game.drawnY;
    }
    
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