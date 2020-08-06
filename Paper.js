class Paper {
    constructor(x, y, width, height) {
      var options = {
          'restitution':1,
          'friction':1.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y, 30, 30, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("sprites/paper.png");
      
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(4);
      stroke("red");
      fill("white");
  imageMode (CENTER);
  image(this.image,30, 30,90,90);
     

      
      pop();
    }
  };