class Bob{
    constructor(x,y,radius){
        var options ={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
        }
        this.radius = radius
        this.Bob = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.Bob);
    }

    display(){
        
        ellipse(x,y,this.radius,this.radius);
        fill("white");

    }
}