import classes from './MealFilterBar.module.css'
import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const MealFilterBar = (props) => {

    const [keyword, setKeyword] = useState('')
    let filterMeal = {};

    useEffect(() => {

        const timer = setTimeout(() => {
            filterMeal = props.MEALS_DATA.filter(item => item.title.includes(keyword))
            props.setFilteredMeal(filterMeal)
        }, 1000)

        return (() => {
            clearTimeout(timer)
        })
    }, [keyword]);

    const SearchHandler = (e) => {
        setKeyword(e.target.value.trim())
    }

    return (
        <div className={classes.MealFilterBar}>
            <div className={classes.InputOuter}>
                <input
                    value={keyword}
                    className={classes.SearchInput}
                    type="text"
                    placeholder={"请输入关键字"}
                    onChange={SearchHandler} />
                <FontAwesomeIcon
                    className={classes.SearchIcon}
                    icon={faSearch} />
            </div>
        </div>
    );
}

export default MealFilterBar;
