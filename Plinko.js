class Plinko{

constructor(x,y,r){

    var options={

        isStatic: true
    }
    this.r = r;

    this.body = Bodies.circle(x,y,r,options);
    World.add(world, this.body);
    this.color = "white";
}

display(){
    var pos = this.body.position;
    ellipseMode(RADIUS);
    ellipse (pos.x,pos.y,this.r);

    
    

}

}