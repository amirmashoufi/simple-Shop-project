import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'

function Header() {
return (
    <>
    <div >
        <div className={classes.header}>
         <h1 className={classes.txt}>Foodino</h1> 
         <Link className={classes.a} to={'/login'} >Login</Link>
         <Link className={classes.a2} to={'/menu'}>Menu</Link>
         <Link>About we</Link>
         <Link className={classes.a1} to={'/cartitem'}>
            <FontAwesomeIcon icon={faShoppingCart} />
         </Link>
         
<h5></h5>
        </div>
    </div>
    </>
)
}

export default Header;