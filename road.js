class Road {
    constructor(x,width,laneCount=3){
        this.x=x;
        this.laneCount=laneCount;
        this.width=width;

        // road width
        this.left=x-width/2;
        this.right=x+width/2;

        // infinite roads

        /* may need to redefine infinity
        if it works just use Infinity 
        
        Update: using built in Infinity does not allow to draw lanes.

        */
        const infinity = 10013904102401240; // big num
        

        this.top=-infinity;
        this.bottom=infinity;

    }

    draw(ctx){
        // lane line generator
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        for(let i=0; i<=this.laneCount; i++){
            // lane values between left and right
            const z=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );

            ctx.beginPath();
            ctx.moveTo(z, this.top);
            ctx.lineTo(z, this.bottom);
            ctx.stroke();
        }
        
    }

    



}

function lerp(A,B,t){
    return A+(B-A)*t;
}