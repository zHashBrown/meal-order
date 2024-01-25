import MealItem from "./MealItem/MealItem";
import classes from './Meals.module.css'
import React from 'react';

const Meals = (props) => {

  return (
    <div className={classes.Meals}>
      {props.MEALS_DATA.map((item) =>
        <MealItem
          key={item.id}
          meal={item}
        />
      )}
    </div>
  );
}

export default Meals;
