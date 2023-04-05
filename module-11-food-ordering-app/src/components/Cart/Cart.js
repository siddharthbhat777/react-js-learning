import React from 'react';
import classes from './Cart.module.css';

const Cart = props => {
    const cartitems = // used classes['cart-items'] because using hyphen '-' is prohibited in css module, so you can access it in this way
        <ul className={classes['cart-items']}>
            {
                [
                    { id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }
                ].map((item) =>
                    <li>{item.name}</li>
                )
            }
        </ul>
    return (
        <div>
            {cartitems}
            <div className={classes.total}>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className={classes.action}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    );
};

export default Cart;