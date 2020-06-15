class Dustbin {
    constructor(x,y,width,height){
        var options={
            'isStatic': true
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width=width
        this.height=height
        World.add(world,this.body)
        this.dustbin=loadImage("assets/dustbingreen.png")
    }
    display(){
        imageMode(CENTER)
        image(this.dustbin,665,280,105,150)
        fill("red")
        rectMode(CENTER)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
    }
}