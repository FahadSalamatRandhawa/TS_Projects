import { Brick } from "./sprites/brick";
import { Ball } from "./sprites/ball";
import { Paddle } from "./sprites/paddle";
import { CanvasView } from "./view/CanvasView";

export class Collisions{
    checkBallCollision(ball:Ball,paddle:Paddle,view:CanvasView):void{
        if(
            (ball.imagePosition.x+ball.width>paddle.imagePosition.x)&&
            (ball.imagePosition.x<paddle.imagePosition.x+paddle.width)&&
            (ball.imagePosition.y===paddle.imagePosition.y)
        ){
            ball.changeYDirection();
        }
        if(ball.imagePosition.x>view.canvas.width-ball.width || ball.imagePosition.x<0){
            ball.changeXDirection();
        }
        if(ball.imagePosition.y<0+ball.height){
            ball.changeYDirection();
        }
    }
    isCollidingBrick(ball:Ball,brick:Brick):boolean{
        if(ball.imagePosition.x<brick.imagePosition.x+brick.width&&
            ball.imagePosition.x+ball.width>brick.imagePosition.x&&
            ball.imagePosition.y<brick.imagePosition.y+brick.height&&
            ball.imagePosition.y+ball.height>brick.imagePosition.y
        ){
            return true;
        }
        return false;
    }
    isCollidingBricks(ball:Ball,bricks:Brick[]):boolean{
        let colliding=false;
        bricks.forEach((brick,i)=>{
            if(this.isCollidingBrick(ball,brick)){
                ball.changeYDirection();
                if(brick.energy===1){
                    bricks.splice(i,1);
                }else{
                    brick.energy-=1;
                }
                colliding=true;
            }
        })
        return colliding;
    }
}