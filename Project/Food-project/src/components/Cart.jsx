// Cart.jsx
import Header from './Headers/Header';
import pizza from '../assest/pizza.png'
import fries from '../assest/fries.png'
import pepperoni from '../assest/pepperoni.png'
import burger from '../assest/burger.png'
import pasta from '../assest/pasta.png'
import React from "react";
import CartItem from "./CartItem";

const Cart = (props) => {
    const AllItems = [
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
    ]
  return (
    <>
      <Header />
      <h1>Your cart items:</h1>
      {AllItems.map((food) => {
        if (food.quantity > 0) {
          return <CartItem key={food.id} food={food} />;
        }
        return null;
      })}
    </>
  );
};

export default Cart;
