import React from "react";
import Styles from "./OpenTicketsTB.module.scss";
import PlusSign from "../../../../images/plus-sign.png"

const OpenTicketsTB = (props) => {
    
    const {toggleNewTicket} = props.toggleNewTicket;

    return (
        <div className={Styles.wrapper}>
            <div className="spacer"></div>
            <button onClick={(e) => toggleNewTicket(true)} ><img src={PlusSign}/>Add New Ticket</button>
       </div>
    );
}

export default OpenTicketsTB;