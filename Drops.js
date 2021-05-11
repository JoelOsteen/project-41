class Drop{
    constructor(x,y,r){
        var options=({
            friction:0.1,
            isStatic:false,
            restitution:0.2,
        })

        this.x=x;
        this.y=y
        this.r=r
        //this.image=loadImage("1.png");
        this.body = Bodies.circle(x,y,10, options);
        World.add(world,this.body);

    }
    display(){

        push();
      noStroke();
        fill("light blue")
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y, 10, 10);
        imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
        pop();
    
    }

    position(){
        
    }
}