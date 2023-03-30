class Car {
    constructor(x,y,width,height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.speed=0;
        this.acceleration=0.15;
        this.maxSpeed=3;
        //friction
        this.friction=0.03;
        this.angle=0; // for car turning

        this.controls = new Controls();
    }
    
    update(){
        this.#move();
    }

    #move(){
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
        if(this.speed!=0){
            // backwards or forward determiner
            var flip = 0;
            if(this.speed>0){
                flip = 1
            } else {
                flip = -1
            }
            if(this.controls.left){
                this.angle+=0.032; // can be improved to be more real world accurate
            }

            if(this.controls.right){
                this.angle-=0.032;
            }
        }

        // turn speed implementation
        this.x-=Math.sin(this.angle)*this.speed;
        this.y-=Math.cos(this.angle)*this.speed;
    
    }
    
    draw(ctx) {
        // initializing car
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);
        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        )
        ctx.fill();

        ctx.restore(); // allows for constant reeval of car position
    }
}