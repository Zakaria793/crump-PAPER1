class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.x=x
        this.y=y
        this.r=r
    this.paperbody=Bodies.circle(this.x,this.y,this.r,options)
    World.add(world,this.paperbody)
    }
 display(){
     push();
     translate(this.paperbody.position.x,this.paperbody.position.y)
     rectMode(CENTER)

     fill("pink")
    ellipse(0,0,this.r,this.r)
    pop();
    }
}