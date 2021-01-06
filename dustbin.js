class Dustbin{
    constructor(x,y,width,height){
      var options={
          isStatic:true
      }
      this.x=x
      this.y=y
      this.width=width 
      this.height=height
      this.dustbinbody=Bodies.rectangle(x,y,width,height,options)
      World.add(world,this.dustbinbody)
    }
    display(){
        push();
        translate(this.dustbinbody.position.x,this.dustbinbody.position.y)
        rectMode(CENTER)
        fill("white")
        rect(0,0,this.width,this.height)
    pop();
    }
}