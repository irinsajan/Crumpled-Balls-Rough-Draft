class Paper {
    constructor(x, y, width, height) {
      var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:0.2
      }
      this.body = Matter.bodies.circle(x, y, radius, options);
      this.width = width;
      this.height = height;
      
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      pos.x = mouseX;
      pos.y = mouseY;
  
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
  
      rectMode(CENTER);
      strokeWeight(3);
      stroke("blue");
      fill(255);
      rect(0, 0, this.width, this.height);
      pop();
    }
  };