import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import s from '../styles/MyProjects.module.scss'

import { useEffect,useRef } from 'react';
import { savePositionMyProjects } from '../redux/features/PositionElement/positionElementSlice';
    

const MyProjects = () => {
    const dispatch=useDispatch()
    const data=useSelector((state:RootState)=>state.myProjects.value)
    const posY=useRef<HTMLDivElement|null>(null)
    
let myProjects:number
    useEffect(()=>{
window.scroll(0,0)
if(posY.current!==null){
myProjects=posY.current.getBoundingClientRect().y
let width=posY.current.getBoundingClientRect().width>699
if(!width){
    posY.current.style.overflow="none"
    console.log("DZIALA?")
}
}
dispatch(savePositionMyProjects({data:myProjects}))
    },[])
    return ( <section ref={posY} className={s.container}>
        <div className={s.introductory}>

            <div className={s.titleParent}><h2 className={s.title}>My projects...</h2></div>
        </div>
        <div className={s.myProjectsContainer}>

      
     {data!==null?data.map((el,i,arr)=>{
        return(
            <article key={el.id} className={s.articleGame}>
                <div className={s.title}>{el.titleGame}</div>
                <img src={el.thumbNail}></img>

                <section className={s.describe}>
                    
                    {el.describe}
                    
                
                </section>
                <button onClick={()=>window.open(el.url,"_blank")} className={s.button}>Play</button>
                <span></span>
            </article>
        )
       }):null}
  </div>
    </section> );
}
 
export default MyProjects;