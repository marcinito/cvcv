import { useEffect,useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { savePositionMyContact } from '../redux/features/PositionElement/positionElementSlice';
import s from '../styles/CONTACT/Contact.module.scss'
const Contact = () => {
    const dispatch=useDispatch()
    const posY=useRef<HTMLDivElement|null>(null)
    let contact:number
    useEffect(()=>{
        window.scrollTo(0,0)
        if(posY.current!==null){
         contact=posY.current.getBoundingClientRect().y
         console.log(contact,"contact")
        }
        dispatch(savePositionMyContact({data:contact}))
    })
    return ( <div className={s.container} ref={posY}>
        
    </div> );
}
 
export default Contact;