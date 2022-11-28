// Start here
import { CanvasView } from "./view/CanvasView";
import { Ball } from "./sprites/ball";
import { Brick } from "./sprites/brick";
import { Paddle } from "./sprites/paddle";

import { Collisions } from "./collisions";
import PADDLE_IMAGE from './images/paddle.png';
import BALL_IMAGE from './images/ball.png'
//Level & Colors
import { PADDLE_HEIGHT,PADDLE_SPEED,PADDLE_WIDTH,PADDLE_STARTX,BALL_SIZE,BALL_SPEED,BALL_STARTX,BALL_STARTY, LEVEL } from "./setup";
//Helpers
import { createBricks } from "./helpers/helpers";

let gameOver=false;
let score=0;

function setGameOver(view:CanvasView){
    view.drawInfo('Game Over!');
    gameOver=false;
}
function setGameWin(view:CanvasView){
    view.drawInfo('You won!');
    gameOver=false;
    view.clear();
}
function gameLoop(view:CanvasView,bricks:Brick[],paddle:Paddle,ball:Ball,collisons:Collisions){
    view.clear();
    view.drawBrick(bricks);
    view.drawSprite(paddle);
    view.drawSprite(ball);

    ball.moveBall();

    if((paddle.isMovingLeft && paddle.imagePosition.x>0) || (paddle.isMovingRight && paddle.imagePosition.x<view.canvas.width-paddle.width)){
        paddle.movePaddle();
    }
    collisons.checkBallCollision(ball,paddle,view);
    const ballCollision=collisons.isCollidingBricks(ball,bricks);
    if(ballCollision){
        score+=1;
        view.drawScore(score);
    }
//Game Lost
    if(ball.imagePosition.y>view.canvas.height){gameOver=true;}
    if(gameOver){setGameOver(view)};
    //GameWon
    if(bricks.length===0){setGameWin(view)};

    requestAnimationFrame(()=>{gameLoop(view,bricks,paddle,ball,collisons)});

}
function startGame(view:CanvasView){
    score=0;
    view.drawInfo('');
    view.drawScore(0);
    
    const collisons=new Collisions();

    const bricks=createBricks();
    const ball=new Ball(
        BALL_SPEED,
        BALL_SIZE,
        {
            x:BALL_STARTX,
            y:BALL_STARTY
        },
        BALL_IMAGE
    )
    const paddle=new Paddle(
        PADDLE_SPEED,
        PADDLE_WIDTH,
        PADDLE_HEIGHT,
        {
            x:PADDLE_STARTX,
            y:view.canvas.height-PADDLE_HEIGHT-5
        },
        PADDLE_IMAGE
    );
    //view.drawSprite(paddle)
    gameLoop(view,bricks,paddle,ball,collisons);
}

const view=new CanvasView('#playField');
view.initStartButton(startGame);