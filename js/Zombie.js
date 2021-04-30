class Zombie{
    constructor(x, y){
        var options = {
            restitution:0.3,
            density:2.0,
            isStatic:true
        }
        this.image = loadImage("png/ZIdle .png")
        this.body = Bodies.rectangle(x,y,20,40,options)
        World.add(world,this.body)
      this.Visiblity = 255;
    }
  
   display(){
     if(this.body.speed < 3){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,60,80)
        pop()
     }
     else{
       World.remove(world, this.body);
       push();
       this.Visiblity = this.Visiblity - 5;
       tint(255,this.Visiblity);
       image(this.image, this.body.position.x, this.body.position.y, 50, 50);
       pop();
     }
    }
  
    score(){
      if (this.Visiblity < 0 && this.Visiblity > -1005){
        score++;
      }
    }
  
  
  
  };