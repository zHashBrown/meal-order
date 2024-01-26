import React, { useContext, useState } from 'react';
import iconImg from '../../asset/bag.png';
import CartContext from "../../store/Context";
import classes from './Cart.module.css'
import CartDetails from './CartDetails/CartDetails';
import Checkout from './Checkout/Checkout';

const Cart = () => {

    const ctx = useContext(CartContext)
    const [cartDetailsDisplay, setCartDetailDisplay] = useState(false)
    const [checkoutDisplay, setCheckoutDisplay] = useState(false)

    const detailDisplayHandler = () => {
        if (ctx.totalAmount === 0) {
            setCartDetailDisplay(false)
            return;
        }
        setCartDetailDisplay(prevState => {
            return !prevState;
        })
    }

    const checkoutDisplayHandler = () => {
        if (ctx.totalAmount === 0) {
            setCheckoutDisplay(false)
            return;
        }
        setCheckoutDisplay(true)
    }

    const hideCheckoutHandler = () => {
        setCheckoutDisplay(false)
    }

    return (
        <div className={classes.Cart} onClick={detailDisplayHandler}>
            {checkoutDisplay && <Checkout onHide={hideCheckoutHandler}/>}

            {cartDetailsDisplay ? <CartDetails /> : null}
            <div className={classes.Icon}>
                <img src={iconImg} />
                {ctx.totalAmount === 0 ? null : <span className={classes.TotalAmount}>
                    {ctx.totalAmount}</span>}
            </div>

            {ctx.totalPrice === 0 ? <p className={classes.NoMeal}>未选购商品</p> : <p className={classes.Price}>{ctx.totalPrice}</p>}

            <button onClick={checkoutDisplayHandler} className={`${classes.Button} ${ctx.totalAmount === 0 ? classes.Disabled : ''}`}>去结算</button>
        </div>
    );
}

export default Cart;
