import s from '../../styles/aboutme/Work.module.scss'
import axios from 'axios';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';


const Work = () => {
const data=useSelector((state:RootState)=>state.apiWork.value)
console.log(data,"work")
    return ( <div className={s.container}>
        <section className={s.prolog}>

     
        <h1>Prolog</h1>
        <em>My history with work had begun before I had seven years old, I was growing on farm and
        during this time I was helping my father with work.Typically farm works, take care about animals, cleaning farm, work on field.

        </em>
        </section>
        <br></br>
        <br></br>
   <div className={s.workExample}>
        {data.dataWork.map((el,i,arr)=>{
            
            
            return (
                
                <table className={s.table}>
<tr>
    <th className={s.titleContent}>Job Title</th>
</tr>
<tr>
   <td className={s.content}>{el.jobTitle}</td>
</tr>
<tr>
   <th className={s.titleContent}>Company</th>
</tr>
<tr>
   <td className={s.content}>{el.company}</td>
</tr>
<tr>
    <th className={s.titleContent}>City</th>
</tr>
<tr>
    <td className={s.content} >{el.city}</td>
</tr>
<tr>
    <th className={s.titleContent}>Time period</th>
</tr>
<tr>
    <td className={s.content}>
    <span>from</span><em>{el.timePeriod.from}</em><span>to</span><em>{el.timePeriod.to}</em>
    </td>
    </tr>
    <tr>
        <th className={s.titleContent}>Description</th>
    </tr>
    <tr>
        <td className={s.contentDescription}>
        {el.description}
        </td>
        </tr>
      
</table>


            )
        })}
</div>
     
    </div> );
}
 
export default Work;