class DBP{
  constructor(x, y, width, height){
      var option = {
          isStatic : true
      }
      this.body = Bodies.rectangle(x, y, width, height, option);
      World.add(world, this.body);
      this.height = height;
      this.width = width;
  }

  display(){
      rectMode(CENTER);
      fill("red");
      rect(this.body.position.x, this.body.position.y, this.width, this.height);
  
  }
}