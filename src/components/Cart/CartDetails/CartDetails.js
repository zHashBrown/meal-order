import React, { useContext, useState } from 'react';
import Backdrop from '../../UI/Backdrop/Backdrop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import classes from './CartDetails.module.css';
import CartContext from "../../../store/Context";
import MealItem from '../../Meals/MealItem/MealItem';
import Confirm from '../../UI/Confirm/Confirm';

const CartDetails = () => {

    const ctx = useContext(CartContext);
    const [showConfirm, setShowConfirm] = useState(false);

    // 添加函数显示确认窗口
    const showConfirmHandler = () => {
        setShowConfirm(true);
    };

    const okHandler = () => {
        // 清空购物车
        ctx.cartDataDispatch({ type: 'CLEAR' })
    };

    const cancelHandler = (e) => {
        e.stopPropagation();
        setShowConfirm(false);
    };

    return (
        <Backdrop>
            {showConfirm === true ? <Confirm
                onOk={okHandler}
                onCancel={cancelHandler}
                confirmText={'确认清空购物车吗？'}
            /> : null}


            <div className={classes.CartDetails}
                onClick={e => e.stopPropagation()}>
                <header className={classes.Header}>
                    <h2 className={classes.Title}>餐品详情</h2>
                    <div className={classes.Clear} onClick={showConfirmHandler}>
                        <FontAwesomeIcon icon={faTrash} />
                        <span>清空购物车</span>
                    </div>
                </header>

                <div className={classes.MealList}>
                    {
                        ctx.items.map(item =>
                            <MealItem noDesc key={item.id} meal={item} />
                        )
                    }
                </div>
            </div>
        </Backdrop>
    );
};

export default CartDetails;
