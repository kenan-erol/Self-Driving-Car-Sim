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
        const infinity = 10013904102401240;
        */

        this.top=-Infinity;
        this.bottom=Infinity;

    }

    draw(ctx){
        // lane line generator
        ctx.lineWidth=5;
        ctx.strokeStyle="white";
        ctx.beginPath();
        ctx.moveTo(this.left, this.top);
        ctx.lineTo(this.left, this.bottom);
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(this.right, this.top);
        ctx.lineTo(this.right, this.bottom);
        ctx.stroke();
    }





}