class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.GlobalWarming = loadImage("sprites/smoke.png")
    this.tradjectory = []
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>10&&this.body.position.x>200){
      var position = [this.body.position.x,this.body.position.y]
    this.tradjectory.push(position);
    }
    

    for(var i=0;i<this.tradjectory.length;i++){
      image(this.GlobalWarming,this.tradjectory[i][0],this.tradjectory[i][1])
    }

  }
}
