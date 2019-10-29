import React from "react";
import Styles from "./Severity.module.scss";

const Severity = (props) => {

    return (
        <div className={Styles.wrapper}>
            <h3>Severity</h3>
            <ul>
                <li><input type="checkbox" /> High</li>
                <li><input type="checkbox" /> Medium</li>
                <li><input type="checkbox" /> Low</li>
            </ul>
       </div>
    );
}

export default Severity;