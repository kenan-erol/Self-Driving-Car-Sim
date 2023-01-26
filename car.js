class Car {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed=0;
        this.acceleration=0.15;
        this.maxSpeed=5;
        //friction
        this.friction=0.05;


        this.controls = new Controls();
    }
    
    update(){
        // car movement
        if(this.controls.forward){
            this.speed+=this.acceleration;
        }

        if(this.controls.reverse){
            this.speed-=this.acceleration;
        }

        if(this.speed>this.maxSpeed){
            // limit car speed
            this.speed=this.maxSpeed;
        }

        if(this.speed<-this.maxSpeed/2){
            // cut the speed of the car in half when in reverse
            this.speed=-this.maxSpeed/2;
        }

        if(this.speed>0){
            this.speed-=this.friction;
        }

        if(this.speed<0){
            this.speed+=this.friction;
        }

        if(Math.abs(this.speed)<this.friction){
            // fix friction movement issue
            this.speed=0;
        }

        // movement in the x axis
        if(this.controls.left){
            this.x-=2;
        }

        if(this.controls.right){
            this.x+=2;
        }

        this.y-=this.speed;
    }
    
    draw(ctx) {
        // initializing car
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        )
        ctx.fill();
    }
}