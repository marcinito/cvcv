
export class Partcile{
    posX:number
    posY:number
    size:number
    canvasWidth:number
    canvasHeight:number
    speed:number
    velocityX:number
    velocityY:number
    arrDirection:[number,number]
    color:string


    constructor(width:number,height:number){
        this.posX=Math.floor(Math.random()*width)
        this.posY=Math.floor(Math.random()*height)
        this.color="yellow"
        this.arrDirection=[-1,1]
        this.size=1
        this.speed=0.5
        this.velocityX=this.speed*this.arrDirection[Math.floor(Math.random()*2)]
        this.velocityY=this.speed*this.arrDirection[Math.floor(Math.random()*2)]
        this.canvasWidth=width
        this.canvasHeight=height
    }
    draw(ctx:CanvasRenderingContext2D|null){
    
        if(ctx!==null){
           
            ctx.beginPath()
            ctx.arc(this.posX,this.posY,this.size,0,Math.PI * 2,false )
            ctx.fillStyle=this.color
            ctx.fill()
        }
    }
    fly(){
        if(this.posX>=this.canvasWidth-this.size)this.velocityX=-this.speed
        if(this.posX<=0)this.velocityX=this.speed
        this.posX+=this.velocityX
        if(this.posY>=this.canvasHeight-this.size)this.velocityY=-this.speed
        if(this.posY<=0)this.velocityY=this.speed
        this.posY+=this.velocityY
        
    }
}