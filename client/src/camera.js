import Position from "./position";

export class Camera{
    constructor(position){
        this.position = position;
    }
    
    constructor(){
        this.position = new Position(0,0);
    } 

    getPosition(){
        return this.position;
    }
}