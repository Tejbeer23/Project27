class Roof{
    constructor(x,y,width,height){
        this.width = width;
        this.height = height;
        this.Roof = Bodies.rectangle(x,y,width,height,{isStatic:true})
        World.add(world,this.Roof)

    }

    display(){
        var pos = this.body.position;  
        push()     
         translate(pos.x , pos.y);
         rectMode(CENTER);
         fill("white"); 
         rect(x,y,this.width,this.height);
        pop()   
    }
}