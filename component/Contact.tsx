import { useEffect,useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { savePositionMyContact } from '../redux/features/PositionElement/positionElementSlice';
import s from '../styles/CONTACT/Contact.module.scss'
import { Partcile } from './contactAnimation/Particle';
const Contact = () => {
    const [stan,setStan]=useState(true)
    const dispatch=useDispatch()
    const containerRef=useRef<HTMLDivElement|null>(null)
    const canvasRef=useRef<HTMLCanvasElement>(null)
    const ctx=useRef<CanvasRenderingContext2D|null>(null)

    let contact:number
    useEffect(()=>{
        window.scrollTo(0,0)
        if(containerRef.current!==null){
         contact=containerRef.current.getBoundingClientRect().y
         console.log(contact,"contact")
        }
        dispatch(savePositionMyContact({data:contact}))
    })


    useEffect(()=>{
        console.log(containerRef.current?.getBoundingClientRect().height,"check")
        if(canvasRef.current!==null){
        let width=canvasRef.current.width=Number(containerRef.current?.getBoundingClientRect().width)
        let height=canvasRef.current.height=Number(containerRef.current?.getBoundingClientRect().height)
        canvasRef.current.style.backgroundColor="black"
        ctx.current=canvasRef.current.getContext("2d")

        let arrayWithStars:Partcile[]=[]
        for(let i=0;i<100;i++){
            arrayWithStars.push(new Partcile(width,height))
        }
        let color=1
        const animate=()=>{
        
         
            ctx.current?.clearRect(0,0,width,height)
            for(let i=0;i<arrayWithStars.length;i++){
             arrayWithStars[i].draw(ctx.current)
             arrayWithStars[i].fly()
              
            }
            for(let a=0;a<arrayWithStars.length;a++){
                for(let b=a;b<arrayWithStars.length;b++){
                    let dx=arrayWithStars[a].posX-arrayWithStars[b].posX
                    let dy=arrayWithStars[a].posY-arrayWithStars[b].posY
                  let distance=Math.sqrt(dx*dx+dy*dy)
                  if(distance<120){
                    let opacityValue=1-(distance/200)
                   
                  if(ctx.current!==null){
                   
                    ctx.current?.beginPath()
                    ctx.current.lineWidth=1-(distance/200)
                    ctx.current.strokeStyle=`rgba(${color},100,30,${opacityValue})`
                    ctx.current?.moveTo(arrayWithStars[a].posX,arrayWithStars[a].posY)
                    ctx.current?.lineTo(arrayWithStars[b].posX,arrayWithStars[b].posY)
                    ctx.current?.stroke()
                  }
                }
                }
            }
         
           window.requestAnimationFrame(animate)
        }
      animate()
        }
        
    },[])
    return ( <div className={s.container} ref={containerRef}>
        <canvas className={s.canvasContact} ref={canvasRef}></canvas>
        <h1 className={s.emailAdres}>kalwara_marcin@o2.pl</h1>
        
    </div> );
}
 
export default Contact;