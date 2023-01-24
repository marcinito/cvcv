import s from '../../styles/aboutme/Generic.module.scss'
import { AiOutlineGlobal } from "react-icons/ai";
import { useEffect, useRef } from 'react';
const Generic = () => {
    const container=useRef<HTMLDivElement|null>(null)
    useEffect(()=>{
      if(container.current!==null){
        let height=container.current?.getBoundingClientRect().height
        
     
      }
    })
    return ( 
        <div className={s.container} ref={container}>
             I am energetic person with positive attitude towards life, eager to learn and 
             bring good value to live other people. I like spent my time on study thing associated with 
             computer science, language, maths, diet, and everything what can be interesing and improve world around me.
             Currently I gather and increase everyday knowledge about
             <ul className={s.ulList}>
                <li>JavaScript</li>
                <li>React</li>
                <li>Next.js</li>
                <li>CSS/SASS</li>
                <li>TypeScript</li>
                <li>GitHub</li>
             </ul>
             I like spent time on conceive resolution for challenge which i meet in code and i want develop
             myself in this direction.
             I need learn a lot and I know that infinite ocean of knowledge expanse before me and I feel excitment.
            <span style={{textShadow:`2px 2px 3px white`}}>
            I belive and I am certain that I need only time to achieve my goals because everything what I need i have in myself,
             like everybody. In future when i acomplish very good level in JavaScript and frontend , I will start learn C language 
            and things associated with electricy because I would like create robot. I also would like go to univeristy in order
            to be around people with similar interesing and achieve degree. I like learn by myself but it would be nice have attest for
            my knowledge.
            </span>
             
        </div>
     );
}
 
export default Generic;