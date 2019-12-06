import React from "react";
import Styles from "./Sprints.module.scss";
import Menu from "./Menu/Menu"

const Sprints = (props) => {

    return (
        <div className={Styles.wrapper}>
            <Menu />
       </div>
    );
}

export default Sprints;