//class for the chain which connects the stone to the boy's hand
class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA : bodyA,
            pointB : pointB,
            stiffness: 0.004,
            length: 40,       
        }
        this.pointB = pointB;
        this.chain = Constraint.create(options);

        World.add(world, this.chain);
    }
    
    attach(body){
		this.chain.bodyA = body;
	}
	
    display(){
        if(this.chain.bodyA ){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
    fly(){
        this.chain.bodyA = null;
    }
}