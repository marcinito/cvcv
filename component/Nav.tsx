import s from '../styles/Nav.module.scss'
import {useRef,useEffect} from 'react'
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
const Nav = () => {
   const positionAboutMeSection=useSelector((state:RootState)=>state.positionElement.valueAboutMe)
   const positionMyProjects=useSelector((state:RootState)=>state.positionElement.valueMyProjects)
    const navigation=(href:string)=>{
     window.scrollTo(0,0)
        if(href==="aboutMe"){
            console.log(window)
           window.scrollTo(0,positionAboutMeSection-50)
        }
        if(href==="myProjects"){
            console.log(window)
           window.scrollTo(0,positionMyProjects-50)
        }
        

    }

    return ( 
        <div  className={s.nav}>
    <ul className={s.ul}>
        <li className={s.aboutMe} onClick={()=>navigation("aboutMe")}>About Me</li>
        <li className={s.myProjects} onClick={()=>navigation("myProjects")}>My Projects</li>
        <li className={s.myGoal}>My goal</li>
        <li className={`${s.underNavAboutMe} ${s.under}`}></li>
        <li className={`${s.underNavMyProjects} ${s.under}`}></li>
        <li className={`${s.underNavMyGoal} ${s.under}`}></li>
        
    </ul>
    
        </div>
     );
}
 
export default Nav;