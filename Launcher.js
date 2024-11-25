class Launcher{
    constructor(bodyA, pointB){
        let options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB ;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

    fly() {
        this.launcher.bodyA = null ;
    }

    attach(body){
        this.launcher.bodyA = body ;
    }

    display(){
        push()
        if (this.launcher.bodyA){
        let pointA = this.launcher.bodyA.position;
        let pointB = this.pointB ;
        strokeWeight(4);
        stroke("cyan")
        line(pointA.x, pointA.y, pointB.x, pointB.y);
    }
    pop()
}
}
