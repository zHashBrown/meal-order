import classes from './MealFilterBar.module.css'
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MealFilterBar = (props) => {

    let filterMeal = {};
    const SearchHandler = (e) => {
        filterMeal = props.MEALS_DATA.filter(item => item.title.includes(e.target.value.trim()))
        props.setFilteredMeal(filterMeal)
    }

    return (
        <div className={classes.MealFilterBar}>
            <div className={classes.InputOuter}>
                <input
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"请输入关键字"} 
                    onChange={SearchHandler}/>
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch} />
            </div>
        </div>
    );
}

export default MealFilterBar;
