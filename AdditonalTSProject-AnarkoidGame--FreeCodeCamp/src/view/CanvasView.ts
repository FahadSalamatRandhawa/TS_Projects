import { Brick } from "~/sprites/brick";
import { Paddle } from "~/sprites/paddle";
import { Ball } from "~/sprites/ball";

export class CanvasView{
    canvas:HTMLCanvasElement;
    private context:CanvasRenderingContext2D|null;
    private scoreDisplay:HTMLObjectElement|null;
    private start:HTMLObjectElement|null;
    private info:HTMLObjectElement|null;

    constructor(canvasname:string){
        this.canvas=document.querySelector(canvasname) as HTMLCanvasElement;
        this.context=this.canvas.getContext('2d');
        this.scoreDisplay=document.querySelector('#score');
        this.start=document.querySelector('#start');
        this.info=document.querySelector('#info');
    }
    clear():void{
     this.context?.clearRect(0,0,this.canvas.width,this.canvas.height);       
    }

    initStartButton(startFunction:(view:CanvasView)=>void):void{
        this.start?.addEventListener('click',()=>startFunction(this))
    }
    drawScore(score:number):void{
        if(this.scoreDisplay){this.scoreDisplay.innerHTML=score.toString();}
    }
    drawInfo(text:string):void{
        if(this.info){this.info.innerHTML=text};
    }
    drawSprite(brick:Brick|Paddle|Ball):void{
        if(!brick){return};
        this.context?.drawImage(
            brick.image,
            brick.imagePosition.x,
            brick.imagePosition.y,
            brick.width,
            brick.height,
        )
    }

    drawBrick(bricks:Brick[]):void{
        bricks.forEach(brick=>this.drawSprite(brick))
    };
}