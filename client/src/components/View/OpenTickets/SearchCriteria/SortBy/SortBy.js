import React from "react";
import Styles from "./SortBy.module.scss";

const SortBy = (props) => {
    const { updateCriteria } = props;

    const handleClick = (value) => {
        updateCriteria("sortBy", value)
    }

    return (
        <div className={Styles.wrapper}>
            <h3>Sort By</h3>
            <div>
                <span onClick={(e) => handleClick("newest")}>newest</span>
                <span> | </span>
                <span onClick={(e) => handleClick("oldest")}>oldest</span>
            </div>
        </div>
    );
}

export default SortBy;