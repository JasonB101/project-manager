import React, { useState, useContext, useRef, useEffect } from "react";
import Styles from "./Ticket.module.scss";
import downArrow from "../../../images/icons/arrow-down.png"
import upArrow from "../../../images/icons/arrow-up.png"
import CloseTicket from "./CloseTicket/CloseTicket"
import { storeData } from "../../../Store"
import { TweenMax, Power2, Circ} from "gsap"

const Ticket = (props) => {
    const storeDataContext = useContext(storeData);

    const openTicketsHook = storeDataContext.openTicketsHook;
    const { deleteTicket, updateTicket } = storeDataContext.openTicketsMethods;

    const { projectName, task, description, date, severity, user, _id } = props;

    const [expanded, toggleExpand] = useState(false);
    const [showCloseTicket, toggleCloseTicket] = useState(false);

    let wrapperAnimate = useRef(null)
    let hiddenBlock = useRef(null)

    const animateTicketExpand = () => {
        if (expanded) {
            TweenMax.to(hiddenBlock, 0.1, { height: 0})
            setTimeout(() => toggleExpand(!expanded), 300);
        } else {
            TweenMax.set(hiddenBlock, { height: "auto" })
            TweenMax.from(hiddenBlock, 0.8, { height:0, ease: Power2.easeOut})
            setTimeout(() => toggleExpand(!expanded), 300);
        }
        
    }

    const animateTicketDelete = (_id) => {
        TweenMax.to(wrapperAnimate, 1, {
            opacity: 0,
            ease: Circ.eastOut,
            y: -500,
            x: 1500,
            onComplete: () => deleteTicket(openTicketsHook, _id)
        })

    }

    useEffect(() => {
        TweenMax.to(wrapperAnimate, .5, {
            opacity: 1,
            ease: Power2.easeIn
        })

    })

    const severityColor = (severityLevel) => {
        switch (severityLevel) {
            case "High":
                return { backgroundColor: "rgba(239, 68, 68, 0.2)", color: "#fecaca", border: "1px solid rgba(239, 68, 68, 0.4)" };
            case "Medium":
                return { backgroundColor: "rgba(245, 158, 11, 0.2)", color: "#fed7aa", border: "1px solid rgba(245, 158, 11, 0.4)" };
            case "Low":
                return { backgroundColor: "rgba(34, 197, 94, 0.2)", color: "#bbf7d0", border: "1px solid rgba(34, 197, 94, 0.4)" };
            default:
                return { backgroundColor: "rgba(107, 114, 128, 0.2)", color: "#d1d5db", border: "1px solid rgba(107, 114, 128, 0.4)" };
        }
    }

    const closeTicketProps = {
        _id,
        deleteTicket,
        openTicketsHook,
        toggleCloseTicket,
        animateTicketDelete
    }

    return (
        <div className={Styles.wrapper} ref={element => wrapperAnimate = element}>
            <span className={Styles.date}>{date}</span>
            <h3>{projectName}</h3>
            <br></br>
            <section>
                <h4>{task}</h4>
                <p style={severityColor(severity)}>Severity Level {severity}</p>
            </section>

                <section className={Styles.hiddenBlock} ref={element => hiddenBlock = element}>
                    <hr></hr>
                    <p>{description}</p>
                    <em>Created by {user}</em>

                    <div className={Styles.buttonWrapper}>
                        <button className={Styles.add}>Add to Sprint</button>
                        <button className={Styles.complete}>Completed</button>
                        <button onClick={(e) => toggleCloseTicket(true)} className={Styles.close}>Close Ticket</button>
                    </div>
                </section>

            <div className={Styles.expandCollapse} onClick={(e) => animateTicketExpand()}>
                <img src={expanded ? upArrow : downArrow} alt="expander" />
            </div>
            {showCloseTicket && <CloseTicket {...closeTicketProps} />}
        </div>
    );
}

export default Ticket;