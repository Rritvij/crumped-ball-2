class Log2 {
  constructor(x,y,width,height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
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
  image(this.image,930,315,150,150);
  }
};