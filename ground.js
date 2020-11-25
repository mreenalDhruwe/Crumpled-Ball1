class ground{
    constructor(){
        var option ={
            isStatic: true
        }
    
        this.body = Bodies.rectangle(400,600,800,50,option);
        World.add(world,this.body);
    }
    display(){
        fill("red");
        rectMode(CENTER);
        rect(this.body.position.x,this.body.position.y,800,50);
    }
}