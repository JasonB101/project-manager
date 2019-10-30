import React from "react";
import Styles from "./Severity.module.scss";

const Severity = (props) => {
    const { searchCriteria: {severity}, updateCriteria } = props;

    const onCheckBoxChange = (name) => {
        let checkedSeverity = severity;
        if (severity.indexOf(name) !== -1) {
            checkedSeverity = checkedSeverity.filter(x => x !== name);
        } else {
            checkedSeverity.push(name);
        }

        updateCriteria("severity", checkedSeverity);
    }


    return (
        <div className={Styles.wrapper}>
            <h3>Severity:</h3>
            <ul>
                <li onClick={() => onCheckBoxChange("High")}><input readOnly={true} type="checkbox"
                    checked={severity.indexOf("High") !== -1} /> High</li>
                <li onClick={() => onCheckBoxChange("Medium")}><input readOnly={true} type="checkbox"
                    checked={severity.indexOf("Medium") !== -1} /> Medium</li>
                <li onClick={() => onCheckBoxChange("Low")}><input readOnly={true} type="checkbox"
                    checked={severity.indexOf("Low") !== -1} /> Low</li>
            </ul>
            <hr></hr>
        </div>
    );
}

export default Severity;