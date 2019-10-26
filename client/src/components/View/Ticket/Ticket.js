import React, { useState, useContext } from "react";
import Styles from "./Ticket.module.scss";
import downArrow from "../../../images/icons/arrow-down.png"
import upArrow from "../../../images/icons/arrow-up.png"
import CloseTicket from "./CloseTicket/CloseTicket"
import {storeData} from "../../../Store"

const Ticket = (props) => {
    const storeDataContext = useContext(storeData);

    const openTicketsHook = storeDataContext.openTicketsHook;
    const {deleteTicket, updateTicket, } = storeDataContext.openTicketsMethods;

    const { projectName, task, description, date, severity, user, id } = props;

    const [expanded, toggleExpand] = useState(false);
    const [showCloseTicket, toggleCloseTicket] = useState(false);

    const severityColor = (severityLevel) => {
        switch (severityLevel) {
            case "High":
                return "rgb(247, 176, 176)";
            case "Medium":
                return "rgb(248, 220, 194)";
            case "Low":
                return "beige";
            default:
                return "none";
        }
    }

    const closeTicketProps = {
        id,
        deleteTicket,
        openTicketsHook,
        toggleCloseTicket
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
                    <hr></hr>
                    <p>{description}</p>
                    <em>Created by {user}</em>

                    <div className={Styles.buttonWrapper}>
                        <button className={Styles.add}>Add to Sprint</button>
                        <button className={Styles.complete}>Completed</button>
                        <button onClick={(e) => toggleCloseTicket(true)} className={Styles.close}>Close Ticket</button>
                    </div>
                </section>}

            <div className={Styles.expandCollapse}  onClick={(e) => toggleExpand(!expanded)}>
                <img src={expanded ? upArrow : downArrow} />
            </div>
            {showCloseTicket && <CloseTicket {...closeTicketProps}/>}
        </div>
    );
}

export default Ticket;