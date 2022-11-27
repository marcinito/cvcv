import s from '../styles/AboutMe.module.scss'
import { useRef,useEffect,useState } from 'react';
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
import { savePositionAboutMe } from '../redux/features/PositionElement/positionElementSlice';

import Generic from './aboutMe/Generic';
import Sport from './aboutMe/Sport';
import Work from './aboutMe/Work';
const AboutMe = () => {
    const [index,setIndex]=useState<number>(0)
    const arrayComponent=[{comp:<Generic></Generic>,title:"My name is Marcin"},{comp:<Sport></Sport>,title:"Sport in my life"},{comp:<Work></Work>,title:"Work history"}]
    const dispatch=useDispatch()
    const check=useSelector((state:RootState)=>state.positionElement)

    const posY=useRef<HTMLDivElement|null>(null)
    let aboutMe:number
useEffect(()=>{

    window.scrollTo(0,0)
   if(posY.current!==null){
    aboutMe=posY.current.getBoundingClientRect().y
    console.log(aboutMe)
   }
   dispatch(savePositionAboutMe({data:aboutMe}))
  
   
},[])


    return ( <article ref={posY} className={s.container}>
        <div className={s.title}>
            <span className={s.titleDecoration}></span>
           <h1>{arrayComponent[index].title}</h1>
        </div>
        <nav className={s.navAboutMe}>
           <div className={`${s.tab} ${s.hobby}`} onClick={()=>setIndex(0)}>About Me</div>
           <div className={`${s.tab} ${s.sport}`} onClick={()=>setIndex(1)}>Sport</div>
           <div className={`${s.tab} ${s.work}`} onClick={()=>setIndex(2)}>Work</div>
           <div className={`${s.tab} ${s.hobby}`}>Hobby</div>
           
         
           </nav>
       <section className={s.contentComponent}>
        <span className={s.bgc1}></span>
        <span className={s.bgc2}></span>
       
        {arrayComponent[index].comp}
       </section>
    

    </article> );
}
 
export default AboutMe;