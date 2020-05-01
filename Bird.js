class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
  }

  display() {
    function mouseDragged(){
      this.body.position.x = mouseX;
      this.body.position.y = mouseY;
    }
    function keyPressed(){
      if (keyCode === 32){
          this.body.position.x = mouseX;
      }
    }
    
    super.display();
  }
}

