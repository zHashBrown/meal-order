import { useState } from "react";
import Counter from "../../UI/Counter/Counter";
import classes from "./MealItem.module.css"

function MealItem(props) {

    const [amount, setAmount] = useState(0);

    return (
        <div className={classes.MealItem}>
            <div className={classes.ImgBox}>
                <img src={props.meal.img} />
            </div>
            <div>
                <h2 className={classes.Title}>{props.meal.title}</h2>
                <p className={classes.Desc}>{props.meal.desc}</p>
                <div className={classes.PriceWrap}>
                    <span className={classes.Price}>{props.meal.price}</span>

                    <Counter amount={amount} setAmount={setAmount} meal={props.meal}
                    />
                </div>
            </div>
        </div>
    );
}

export default MealItem;
