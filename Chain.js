class Chain{
constructor(bodyA,bodyB){
    var options = {
        bodyA:bodyA,
        bodyB:bodyB,
        length:10,
        stiffness:0.04
    }
    var chain = Constraint.create(options)
    World.add(world,chain)
}
display(){
    var pointA= this.chain.bodyA.position;
    var pointB= this.chain.bodyB.position;
    strokeWeight(3);
    line(bird.body.position.x,bird.body.position.y,log6.body.position.x,log6.body.position.y)
}
}