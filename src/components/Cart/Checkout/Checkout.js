import React, { useContext } from 'react';
import ReactDOM from "react-dom";
import classes from "./Checkout.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../store/Context";
import CheckoutItem from './CheckoutItem/CheckoutItem';
import Bar from './Bar/Bar'

const checkoutRoot = document.getElementById('checkout-root');

const Checkout = (props) => {
    const ctx = useContext(CartContext);

    return ReactDOM.createPortal(
        <div className={classes.Checkout}>
            <div className={classes.Close}>
                <FontAwesomeIcon
                    onClick={() => props.onHide()}
                    icon={faXmark} />
            </div>

            <div className={classes.MealsDesc}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                </header>

                <div>

                    <div className={classes.MealList}>
                        {
                            ctx.items.map(item =>
                                <CheckoutItem key={item.id} meal={item} />
                            )
                        }
                    </div>
                </div>

                <footer className={classes.Footer}>
                    <p className={classes.TotalPrice}>{ctx.totalPrice}</p>
                </footer>

                <Bar totalPrice={ctx.totalPrice}/>
            </div>
        </div>,
        checkoutRoot);
};

export default Checkout;
