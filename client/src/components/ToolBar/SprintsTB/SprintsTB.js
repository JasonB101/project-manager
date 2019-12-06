import React from "react";
import Styles from "./SprintsTB.module.scss";
import plusSign from "../../../images/icons/plus-sign.png"

const SprintsTB = (props) => {

    const {toggleNewSprint} = props.toggleNewSprint;

    return (
        <div className={Styles.wrapper}>
            <div className="spacer"></div>
            <button onClick={(e) => toggleNewSprint(true)} ><img src={plusSign} alt="plus sign" />Add New Sprint</button>
        </div>
    );
}

export default SprintsTB;