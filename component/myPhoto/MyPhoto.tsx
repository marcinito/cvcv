import s from '../../styles/MyPhoto.module.scss'
import {useRef,useEffect,useState} from 'react'
import { sizeMyPhoto } from '../../Interface/MyPhotoInterface'
import PartOfPhoto from './partOfPhoto'
const MyPhoto = () => {
    const [sizeParent,setSizeParent]=useState<sizeMyPhoto>({x:0,y:0})
    const myPhoto=useRef<HTMLDivElement>(null)
   
    let arrayPhoto=[1,2,3,4,5,6,7,8,9,10,11,12]

    useEffect(()=>{
     
   
        if(myPhoto.current!==null){
            setSizeParent({...sizeParent,
                x:Number(window.getComputedStyle(myPhoto.current).getPropertyValue("width").slice(0,3)),
                y:Number(window.getComputedStyle(myPhoto.current).getPropertyValue("height").slice(0,3))
            })
           
            
            
        }
       
    },[])
    return ( <div className={s.container}>
        <div className={s.photo} ref={myPhoto}>
            {arrayPhoto.map((el,i,arr)=>{
                return(
                    <PartOfPhoto size={sizeParent} id={el} key={el}></PartOfPhoto>
                )
            })}
        </div>
    </div> );
}
 
export default MyPhoto;