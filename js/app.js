console.log('this works')
const startGame = () => {
    let playerOneName = prompt("Player One Name?")
    if (playerOneName === ''){
        let playerOneName = 'Player One' 
    }
    let playerTwoName = prompt("Player Two Name?")
    if (playerTwoName === '' ){
        let playerTwoName = 'Player Two'
    }
    setInterval(draw, 10);
}
let startButton = document.getElementById('start-game')
startButton.addEventListener('click', startGame)
class Win {
    constructor(){
        this.playerOneScore = 0
        this.playerTwoScore = 0
        this.gameTime = 0
    }
    restartGame(){
        //IF playerOne score and Playertwo score is greater than zero 
        //RESET blocks
        //RESET scores to zero
        //RETURN to main screen
        //ELSE then 
        //RESET blocks
        //SWITCH player score 
        
    }
    checkScore(){
        if (this.playerOneScore > this.playerTwoScore){
            alert(`${playerOneName} Wins!`)
        } else if(this.playerOneScore === this.playerTwoScore){
            alert('It is a DRAW!')
        }else{
            alert(`${playerTwoName} Wins!`)
        }
    }   
}
const winConditions = new Win 
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
class Paddle{
    constructor(){
        this.paddleHeight = 20
        this.paddleWidth = 120
        this.paddleX = (game.canvas.width-this.paddleWidth)/2
    }
}
const paddle = new Paddle
// console.log(game.canvas.width)

function drawPaddle() {
    game.canvasContext.beginPath()
    game.canvasContext.rect(paddle.paddleX, game.canvas.height-paddle.paddleWidth, paddle.paddleWidth, paddle.paddleHeight)
    //the .rect method creates a rectangle taking 
    //takes parameters that take the dimmensions of the paddle
    //returns color to canvas
    game.canvasContext.fillStyle = '#1B1B1B'
    game.canvasContext.fill()
    game.canvasContext.closePath()
    
}

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
// console.log(drawBall());

function draw() {
    game.canvasContext.clearRect(0, 0, game.canvas.width, game.canvas.height);
    //clear rect clears a solid line that would be left behind the ball moving
    drawBall();
    drawPaddle();
    game.canvasX += game.drawnX;

    game.canvasY += game.drawnY;
    if(game.canvasX + game.drawnX > game.canvas.width-game.ballRadius || game.canvasX + game.drawnX < game.ballRadius) {
        //Uses logical operator to add another layer of measuremeant to tell the code to send the ball the other way if the game drawn x -axis is less than the radius of the ball *this prevents the ball from disappearing halfway off the screen*
        game.drawnX = -game.drawnX;
        //this says that if the ball is touching the left or right side of the canvas then it is reversed
    }
    
    if(game.canvasY + game.drawnY > game.canvas.height-game.ballRadius || game.canvasY + game.drawnY < game.ballRadius) {
        game.drawnY = -game.drawnY;
        //if the ball is touching the top or bottom of the canvas then it is reversed
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