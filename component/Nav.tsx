import s from '../styles/Nav.module.scss'
import {useRef,useEffect} from 'react'
import type { RootState } from '../redux/store';
import { useSelector, useDispatch } from 'react-redux'
const Nav = () => {
   const positionAboutMeSection=useSelector((state:RootState)=>state.positionElement.valueAboutMe)
   const positionMyProjects=useSelector((state:RootState)=>state.positionElement.valueMyProjects)
   const positionContact=useSelector((state:RootState)=>state.positionElement.valueContact)
    const navigation=(href:string)=>{
     window.scrollTo(0,0)
        if(href==="aboutMe"){
            console.log(window)
           window.scrollTo(0,positionAboutMeSection)
        }
        if(href==="myProjects"){
            console.log(window)
           window.scrollTo(0,positionMyProjects)
        }
        if(href==="Contact"){
            console.log(window)
           window.scrollTo(0,positionContact)
        }
        

    }

    return ( 
        <div  className={s.nav}>
    <ul className={s.ul}>
        <li className={s.aboutMe} onClick={()=>navigation("aboutMe")}>About Me</li>
        <li className={s.myProjects} onClick={()=>navigation("myProjects")}>My Projects</li>
        <li className={s.myGoal} onClick={()=>navigation("Contact")}>Contact</li>
        <li className={`${s.underNavAboutMe} ${s.under}`}></li>
        <li className={`${s.underNavMyProjects} ${s.under}`}></li>
        <li className={`${s.underNavMyGoal} ${s.under}`}></li>
        
    </ul>
    
        </div>
     );
}
 
export default Nav;