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
        const infinity = 1001390; // big num
        

        this.top=-infinity;
        this.bottom=infinity;

        const topLeft = {x:this.left,y:this.top};
        const topRight = {x:this.right,y:this.top};
        const bottomLeft = {x:this.left,y:this.bottom};
        const bottomRight = {x:this.right,y:this.bottom};

        this.borders=[
            [topLeft, bottomLeft],
            [topRight, bottomRight]
        ];
    }

    getLaneCenter(laneIndex){
        const laneWidth = this.width/this.laneCount;
        return this.left+laneWidth/2+laneIndex*laneWidth;
    }

    draw(ctx){
        // lane line generator
        ctx.lineWidth=5;
        ctx.strokeStyle="white";

        for(let i=1; i<=this.laneCount-1; i++){
            // lane values between left and right
            const x=lerp(
                this.left,
                this.right,
                i/this.laneCount
            );

            // making lines checkered
            // if(i> 0 && i<this.laneCount){
            //     ctx.setLineDash([25,25]);
            // }else{
            //     ctx.setLineDash([]);
            // }

            ctx.setLineDash([25,25])
            ctx.beginPath();
            ctx.moveTo(x, this.top);
            ctx.lineTo(x, this.bottom);
            ctx.stroke();
            
        }

        ctx.setLineDash([]);
        this.borders.forEach(border=>{
            ctx.beginPath();
            ctx.moveTo(border[0].x, border[0].y);
            ctx.lineTo(border[1].x, border[1].y);
            ctx.stroke();
        });
        
    }

    



}