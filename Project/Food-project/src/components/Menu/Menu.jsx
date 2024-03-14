import Header from '../Headers/Header';
import pizza from '../../assest/pizza.png'
import fries from '../../assest/fries.png'
import pepperoni from '../../assest/pepperoni.png'
import burger from '../../assest/burger.png'
import pasta from '../../assest/pasta.png'
import { useState } from 'react';
import classes from './Menu.module.css';

function Menu() {
    const [foods, setFoods] = useState([
        { id: 1,
            name: 'Pizza',
            price: '1200',
            image: pizza ,
             quantity: 0 },
   
           { id: 2,
            name: 'French Fries',
            price: '15.99',
            image: fries ,
             quantity: 0 },
   
           { id: 3,
            name: 'Pepperoni Pizza',
            price: '99.99',
            image: pepperoni,
             quantity: 0 },
   
           { id: 4,
            name: 'Juicy Burger',
            price: '170',
            image: burger,
             quantity: 0 },
   
             { id: 5,
               name: 'Pasta Alfredo',
               price: '270',
               image: pasta,
                quantity: 0 }
    ]);

    const [loading, setLoading] = useState(false)

    const increaseQuantity = (index) => {
        const updatedFoods = [...foods];
        updatedFoods[index].quantity++;
        setFoods(updatedFoods);
    };

    const decreaseQuantity = (index) => {
        const updatedFoods = [...foods];
        updatedFoods[index].quantity = Math.max(0, updatedFoods[index].quantity - 1);
        setFoods(updatedFoods);
    };

    function submitFormHandler() {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 3000); // Adjust the timeout duration as needed
    }

    return (
        
        <div className={classes.container }>
            <Header />
            <h2>Choose your food.</h2>
            {foods.map((food, index) => (
                <div key={index}>
                    <h2 className={classes.foodDetails}>{food.name}</h2>
                    <h2 className={classes.price}>Price: {food.price}$</h2>
                    <img src={food.image} className={classes.foodImage} />
                    {/* <input type="text" value={food.quantity} readOnly /> */}
                    <button type="button" onClick={() => decreaseQuantity(index)}>-</button>
                    {food.quantity}
                    <button type="button" onClick={() => increaseQuantity(index)}>+</button>
                    <div className={classes.vl}></div>
                    
                </div>
                
            ))}
            <button className={classes.sub} type='submit' onClick={submitFormHandler}>Order</button>
            {loading && <h2>Loading...</h2>}
        </div>
    );
}

export default Menu;
