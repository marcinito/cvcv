import s from '../../styles/MyPhoto.module.scss'
import {useRef,useEffect,useState} from 'react'
import { sizeMyPhoto } from '../../Interface/MyPhotoInterface'
import PartOfPhoto from './partOfPhoto'
const MyPhoto = () => {
    const [sizeParent,setSizeParent]=useState<sizeMyPhoto>({x:0,y:0})
    const [resize,setResize]=useState<boolean>(false)
  
    const myPhoto=useRef<HTMLDivElement>(null)
   
    let arrayPhoto:number[]=[1,2,3,4,5,6,7,8,9,10,11,12]


    useEffect(()=>{
     
   
        if(myPhoto.current!==null){
            setSizeParent({...sizeParent,
                x:myPhoto.current.clientWidth,
                y:myPhoto.current.clientHeight
            })
           
            
            
        }
     
    },[resize])
    return ( <article className={s.container}>
        <div className={s.photo} ref={myPhoto}>
            {arrayPhoto.map((el,i,arr)=>{
                return(
                    <PartOfPhoto  size={sizeParent} id={el} key={el}></PartOfPhoto>
                )
            })}
        </div>
       
    
    </article> );
}
 
export default MyPhoto;