import s from '../../styles/aboutme/Sport.module.scss'
import { useDispatch,useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
interface Sport{
    id:number,
    title:string,
    img:string|null

}
let sportActivities:Sport[]=[
    {id:0,title:"Running",img:null}
]
const Sport = () => {
    const data=useSelector((state:RootState)=>state.apiMySport.value)
    console.log(data,"sport")
    return ( <div className={s.container}>
           <div className={s.preamble}>
           <h1>...take big part</h1>
            <p>My favourites sports activities are</p>
           </div>
            <section className={s.favouriteSports}>
        {data.map((el,i,arr)=>{
            return(
                <article key={el.id} className={s.article}>
                    <h4 className={s.title}>{el.title}</h4>
                    <img className={s.img} src={el.img}></img>
                    <p className={s.describe}><b>{el.describe} {el.link?<a href={el.link} target="_blank">Pierre Lallement</a>:null}</b></p>

                </article>
            )
        })}

            </section>
    </div> );
}
 
export default Sport;