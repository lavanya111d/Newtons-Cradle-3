class Rope
{
    constructor(bodyA,bodyB)
    {
        var options = {
        bodyA: bodyA,
        bodyB:bodyB,
        length:10
    }
    this.rope1 = Matter.Constraint.create(options);
    World.add(world, this.rope1);
}   
   display()
   {
    var pointA = this.rope1.bodyA.position;
    var pointB = this.rope1.bodyB.position;

    push();
    stroke(48,22,8);
    line(pointA.x,pointA.y,pointB.x,pointB.y);
    pop();
   }
}