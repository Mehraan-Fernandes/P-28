class Paper{
    constructor(x,y,width,height){
        var options = {
            'frictionAir':0,
            'friction':0,
            'frictionStatic':1,
           // 'inertia': Infinity,
            //'restitution':1.5
        }
        this.paper = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height
        World.add(world,this.paper);
        
        
    }
    display(){
 
        push();
        //translate(this.paper.position.x, this.paper.position.y);
        fill("red")
        rectMode(CENTER);
        rect(this.paper.position.x,this.paper.position.y,this.width,this.height);
        pop();
    }
}