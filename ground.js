class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
        }
        this.x=x
        this.y=y
        this.width=width
        this.height=height
        this.groundbody=Bodies.rectangle(x,y,width,height,options)
        World.add(world,this.groundbody)
    }
    display(){
        rectMode(CENTER)
        fill("yellow")
        rect(this.groundbody.position.x,this.groundbody.position.y,this.width,this.height)
        
    }
}