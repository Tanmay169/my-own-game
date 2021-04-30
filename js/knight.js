class Knight{
    constructor(x,y){
        var options = {
            restitution:0.3,
            density:2.0
        }
        this.image = loadImage("png/Idle (1).png")
        this.body = Bodies.rectangle(x,y,20,40,options)
        World.add(world,this.body)
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push()
        translate(pos.x,pos.y)
        rotate(angle)
        imageMode(CENTER)
        image(this.image,0,0,60,80)
        pop();
    }
}