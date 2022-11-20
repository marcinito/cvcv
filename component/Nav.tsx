import s from '../styles/Nav.module.scss'
const Nav = () => {
    return ( 
        <div className={s.nav}>
    <ul className={s.ul}>
        <li>About Me</li>
        <li>My Projects</li>
        <li>My goal</li>
    </ul>
        </div>
     );
}
 
export default Nav;