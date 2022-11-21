import s from '../../styles/MyPhoto.module.scss'
import {useRef,useEffect,useState} from 'react'
import { sizeMyPhoto } from '../../Interface/MyPhotoInterface'
import PartOfPhoto from './partOfPhoto'
const MyPhoto = () => {
    const [sizeParent,setSizeParent]=useState<sizeMyPhoto>({x:0,y:0})
    const [amount,setAmount]=useState<number>(12)
    const myPhoto=useRef<HTMLDivElement>(null)
   
    let arrayPhoto:number[]=[]
     for(let i=1;i<amount+1;i++){
        arrayPhoto.push(i)
     }
console.log(arrayPhoto,"array")
    useEffect(()=>{
     
   
        if(myPhoto.current!==null){
            setSizeParent({...sizeParent,
                x:myPhoto.current.clientWidth,
                y:myPhoto.current.clientHeight
            })
           
            
            
        }
     
    },[])
    return ( <div className={s.container}>
        <div className={s.photo} ref={myPhoto}>
            {arrayPhoto.map((el,i,arr)=>{
                return(
                    <PartOfPhoto  size={sizeParent} id={el} key={el}></PartOfPhoto>
                )
            })}
        </div>
        <input type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}></input>
        <button>Add cage</button>
    </div> );
}
 
export default MyPhoto;