class Log {
  constructor(x,y,height,width) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = 20;
    this.height = height;
    World.add(world, this.body);
    this.image = loadImage("sprites/dustbingreen.png");
  }
  display(){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x, pos.y, this.width, this.height);
    imageMode (CENTER);
  image(this.image,930,315,90,90);
  }
};