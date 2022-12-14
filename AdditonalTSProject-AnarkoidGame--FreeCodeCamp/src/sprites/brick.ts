import { Vector } from "~/types";

export class Brick{
    private brickImage:HTMLImageElement=new Image();

    constructor(
        private brickWidth:number,
        private brickHeight:number,
        private position:Vector,
        private brickEnergy:number,
        brickPath:string
    ){
        this.brickWidth=brickWidth;
        this.brickHeight=brickHeight;
        this.position=position;
        this.brickEnergy=brickEnergy;
        this.brickImage.src=brickPath;
    }

    get width():number{
        return this.brickWidth;
    }
    get height():number{
        return this.brickHeight;
    }
    get imagePosition():Vector{
        return this.position;
    }
    get image():HTMLImageElement{
        return this.brickImage;
    }
    get energy():number{
        return this.brickEnergy;
    }
    set energy(num:number){
        this.brickEnergy-=num;
    }
}