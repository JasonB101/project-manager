import React, { useState } from "react";
import Styles from "./Ticket.module.scss";
import downArrow from "../../../images/icons/arrow-down.png"
import upArrow from "../../../images/icons/arrow-up.png"

const Ticket = (props) => {
    const { projectName, task, description, date, severity } = props;

    const [expanded, toggleExpand] = useState(false);

    const severityColor = (severityLevel) => {
        switch (severityLevel) {
            case "High":
                return "rgb(252, 135, 135)";
            case "Medium":
                return "rgb(250, 237, 121)";
            case "Low":
                return "rgb(194, 248, 194)";
            default:
                return "none";
        }
    }

    return (
        <div className={Styles.wrapper}>
            <span className={Styles.date}>{date}</span>
            <h3>{projectName}</h3>
            <br></br>
            <section>
                <h4>{task}</h4>
                <p style={{ backgroundColor: severityColor(severity) }}>Severity Level {severity}</p>
            </section>
            {expanded &&
                <section>
                    <p>{description}</p>
                </section>}
            <div className={Styles.expandCollapse} onClick={(e) => toggleExpand(!expanded)}>
                <img src={expanded ? upArrow : downArrow} />
                </div>

        </div>
    );
}

export default Ticket;