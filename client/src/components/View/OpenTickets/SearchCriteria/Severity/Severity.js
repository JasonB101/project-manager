import React, {useState} from "react";
import Styles from "./Severity.module.scss";

const Severity = (props) => {
    const {updateCriteria} = props;
    const [checkBoxValues, changeTextBoxValues] = useState({
        "High": false,
        "Medium": false,
        "Low": false
    });

    const onCheckBoxChange = (e) => {
        let isChecked = e.target.checked;
        let values = {...checkBoxValues};
        values[e.target.name] = isChecked;
        for (let key in values) {
            if (!values[key]) {
                delete values[key]
            }
        }
        updateCriteria("severity", Object.keys(values));
        changeTextBoxValues({...checkBoxValues, [e.target.name]: isChecked})
    }


    return (
        <div className={Styles.wrapper}>
            <h3>Severity:</h3>
            <ul>
                <li><input onChange={onCheckBoxChange} type="checkbox" name="High"/> High</li>
                <li><input onChange={onCheckBoxChange} type="checkbox" name="Medium"/> Medium</li>
                <li><input onChange={onCheckBoxChange} type="checkbox" name="Low"/> Low</li>
            </ul>
            <hr></hr>
       </div>
    );
}

export default Severity;