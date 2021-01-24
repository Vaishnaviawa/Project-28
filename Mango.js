//class for the mangoes
class Mango{
    constructor(x, y, radius ){
        var options ={
            'restitution': 0.5,
            'friction': 0.3,
            'density': 1.0,
            isStatic: true
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(this.x, this.y, this.radius, options);
        this.image = loadImage("mango.png");

        World.add(world, this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rotate(this.body.angle);
        imageMode(CENTER);
        ellipseMode(RADIUS);
	    image(this.image, 0, 0, this.radius*2, this.radius*2);
        pop();
    }
}