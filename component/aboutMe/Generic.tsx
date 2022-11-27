import s from '../../styles/aboutme/Generic.module.scss'
import { AiOutlineGlobal } from "react-icons/ai";
const Generic = () => {
    return ( 
        <div className={s.container}>
        <p className={s.pDescribe}><em>Hi</em>...i am from Earth <AiOutlineGlobal></AiOutlineGlobal> more preciously from Poland,
        my country lay 28 000 000 000 transit years from  
        <a href="https://en.wikipedia.org/wiki/WHL0137-LS" target="_blank">Earendel</a>.
        In spare time I like learning about things that interest me, going to gym, drive on bicycle, do maths task,
        listen music and be around nature.
        I would like start work like front-end web developer because I really like spent time writing code, and learning 
        new thing about it.I think it is my passion.I used to learn about computer since when I had 16 years old then I built,
        my own server in game of name <q>Tibia</q><em>MMORPG-type</em> which gathered around 30 players online.It gave me a lot 
        <span className={s.secondPartText}>
        satysfaction.
        After some years I backed to learning and interesing things like this , between this period of time I finished school ,got drive licence for HGV,
        worked abroad and got nice experience about another culture and country by chance I become traveler because I was working 
        in 4 country Germany , Norway , Nederland , England and I was on holiday in some place.During this time I liked reading book 
        about scien-fiction , psychology, action, medieva fiction.I like improve things around me and aspect in my live.
        </span>
       

        </p> 
        </div>
     );
}
 
export default Generic;