import React, { useContext, useState } from 'react';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/Context";
import classes from './Cart.module.css'
import CartDetails from './CartDetails/CartDetails';

const Cart = () => {

    const ctx = useContext(CartContext)
    const [cartDetailsDisplay, setCartDetailDisplay] = useState(false)
    const displayHandler = () => {
        if (ctx.totalAmount === 0) {
            setCartDetailDisplay(false)
            return;
        }
        setCartDetailDisplay(prevState => {
            return !prevState;
        })
    }

    return (
        <div className={classes.Cart} onClick={displayHandler}>
            {cartDetailsDisplay ? <CartDetails /> : null}
            <div className={classes.Icon}>
                <img src={iconImg} />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>
                    {ctx.totalAmount}</span>}
            </div>

            {ctx.totalPrice === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}

            <button className={classes.Button}>去结算</button>
        </div>
    );
}

export default Cart;
