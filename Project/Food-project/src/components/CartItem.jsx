// CartItem.jsx
import React from "react";
//import classes from './CartItem.module.css';

const CartItem = (props) => {
  const { name, price, quantity } = props.foods;
  return (
    <div className={classes.cartItem}>
      <h3>{name}</h3>
      <p>Price: {price}$</p>
      <p>Quantity: {quantity}</p>
    </div>
  );
};

export default CartItem;
