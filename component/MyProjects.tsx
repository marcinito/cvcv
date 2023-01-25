import { useSelector,useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import s from '../styles/MyProjects.module.scss'

import { useEffect,useRef } from 'react';
import { savePositionMyProjects } from '../redux/features/PositionElement/positionElementSlice';
    

const MyProjects = () => {
    const dispatch=useDispatch()
    const data=useSelector((state:RootState)=>state.myProjects.value)
    const posY=useRef<HTMLDivElement|null>(null)
    console.log(data)
let myProjects:number
    useEffect(()=>{
window.scroll(0,0)
if(posY.current!==null){
myProjects=posY.current.getBoundingClientRect().y


}
dispatch(savePositionMyProjects({data:myProjects}))
    },[])
    return ( <section ref={posY} className={s.container}>
        <div className={s.introductory}>

            <div className={s.titleParent}><h2 className={s.title}>My projects...</h2></div>
        </div>
        <div className={s.myProjectsContainer}>

      
       {data.map((el,i,arr)=>{
        return(
            <article key={el.id} className={s.articleGame}>
                <div className={s.title}><p>{el.titleGame}</p></div>
                <img src={el.thumbNail}></img>

                <section className={s.describe}>
                    
                    {el.describe}
                    
                
                </section>
                <button onClick={()=>window.open(el.url,"_blank")} className={s.button}>Play</button>
                <span></span>
            </article>
        )
       })}
  </div>
    </section> );
}
 
export default MyProjects;