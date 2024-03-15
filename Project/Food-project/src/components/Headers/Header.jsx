import { useContext } from 'react'
import classes from './Header.module.css'
import { Link } from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../store/cart-context'

function Header() {
    const cartCtx = useContext(CartContext);

    const numderOfCartItems = cartCtx.items.reduce((curNumber, item) => {
        return curNumber + item.quantity;
    }, 0)
return (
    <>
    <div >
        <div className={classes.header}>
         <h1 className={classes.txt}>Foodino</h1> 
         <Link className={classes.a} to={'/login'} >Login</Link>
         <Link className={classes.a2} to={'/menu'}>Menu</Link>
         <Link>About we</Link>
         <div className={classes.a1}>
           <Link  to={'/cartitem'}>
            <FontAwesomeIcon icon={faShoppingCart} />
         <span> Your Cart</span>
         <span>{numderOfCartItems}</span>
         </Link>
         </div>
         

         
<h5></h5>
        </div>
    </div>
    </>
)
}

export default Header;