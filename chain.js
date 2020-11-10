class Chain {
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
  
        this.chain = Constraint.create(options);
        World.add(world,this.chain);
    }
    display(){
        var positionA = this.chain.bodyA.position;
        var positionB = this.chain.bodyB.position;
        strokeWeight(4);
        line(positionA.x,positionA.y,positionB.x,positionB.y);
    }
}