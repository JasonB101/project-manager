import React from "react";
import Styles from "./CloseTicket.module.scss";

const CloseTicket = (props) => {

    const { _id, toggleCloseTicket, animateTicketDelete } = props;

    const removeTicket = () => {
        document.querySelector("#deleteTicket").style.display = "none";
        animateTicketDelete(_id)
    }

    return (
        <div id="deleteTicket" className={Styles.outterDiv}>
            <div className={Styles.wrapper}>
                <h3>Closing out ticket. Are you sure?</h3>
                <button onClick={() => removeTicket()}>Confirm</button>
                <button onClick={(e) => toggleCloseTicket(false)}>cancel</button>
            </div>
        </div>
    );
}

export default CloseTicket;