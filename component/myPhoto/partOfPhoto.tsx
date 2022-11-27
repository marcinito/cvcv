import s from '../../styles/partOfPhoto.module.scss'
import { useRef,useEffect } from 'react';
interface Props{
    size:{
        x:number,
        y:number
    },
    id:number,
   
}


const PartOfPhoto = (props:Props) => {

    

    const partPhoto=useRef<HTMLDivElement>(null)


    useEffect(()=>{
        if(partPhoto.current!==null){
            if(props.id===2){
                
                
               
            }
            partPhoto.current.style.backgroundSize=`${props.size.x}px ${props.size.y}px`
            if(props.id===2){
                
                partPhoto.current.style.backgroundPositionX=`-${props.size.x/3}px`
            }
            if(props.id===3){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x - props.size.x/3 }px`
            }
            if(props.id===4){
                partPhoto.current.style.backgroundPositionX=`-0px`
                partPhoto.current.style.backgroundPositionY=`-${props.size.y/4}px`
            }
            if(props.id===5){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x/3}px`
                partPhoto.current.style.backgroundPositionY=`-${props.size.y/4}px`
            }
            if(props.id===6){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x - props.size.x/3 }px`
                partPhoto.current.style.backgroundPositionY=`-${props.size.y/4}px`
            }
            if(props.id===7){
                partPhoto.current.style.backgroundPositionX=`-0px`
                partPhoto.current.style.backgroundPositionY=`-${props.size.y/2}px`
            }
            if(props.id===8){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x/3}px`
                partPhoto.current.style.backgroundPositionY=`-${props.size.y/2}px`
            }
            if(props.id===9){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x - props.size.x/3 }px`
                partPhoto.current.style.backgroundPositionY=`-${props.size.y/2}px`
            }
            if(props.id===10){
                partPhoto.current.style.backgroundPositionX=`0px`
                partPhoto.current.style.backgroundPositionY=`-${(props.size.y/4)*3}px`
            }
            if(props.id===10){
                
                partPhoto.current.style.backgroundPositionY=`-${(props.size.y/4)*3}px`
            }
            if(props.id===11){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x/3}px`
                partPhoto.current.style.backgroundPositionY=`-${(props.size.y/4)*3}px`
            }
            if(props.id===12){
                partPhoto.current.style.backgroundPositionX=`-${props.size.x - props.size.x/3 }px`
                partPhoto.current.style.backgroundPositionY=`-${(props.size.y/4)*3}px`
            }
            
            
        }
        
       })
       
    return ( <div  ref={partPhoto} className={s.container}>

    </div> );
}
 
export default PartOfPhoto;