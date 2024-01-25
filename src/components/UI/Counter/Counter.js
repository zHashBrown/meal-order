import React, { useContext } from 'react';
import classes from './Counter.module.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from '@fortawesome/free-solid-svg-icons';
import cartDataContext from '../../../store/Context';

// 计数器的组件
const Counter = (props) => {

    const CartContext = useContext(cartDataContext)
    const addHandler = () => {
        
        CartContext.addItemHandler(props.meal);
        props.setAmount((preAmount) => {
            return preAmount + 1;
        })
    }

    const subHandler = () => {
        CartContext.subItemHandler(props.meal);
        props.setAmount((preAmount) => {
            return preAmount - 1;
        }
        )
    }


    return (
        <div className={classes.Counter}>

            {
                (props.amount && props.amount !== 0) ? (
                    <>
                        <button onClick={subHandler} className={classes.Sub}>
                            <FontAwesomeIcon icon={faMinus} />
                        </button>
                        <span className={classes.count}>{props.amount}</span>
                    </>
                ) : null
            }

            <button onClick={addHandler} className={classes.Add}>
                <FontAwesomeIcon icon={faPlus} />
            </button>
        </div>
    );
};

export default Counter;
