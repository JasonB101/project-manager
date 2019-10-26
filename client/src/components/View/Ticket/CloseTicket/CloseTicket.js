import React, { useContext } from "react";
import Styles from "./CloseTicket.module.scss";

const CloseTicket = (props) => {

    const { id, deleteTicket, openTicketsHook, toggleCloseTicket } = props;

    const removeTicket = () => {
        deleteTicket(openTicketsHook, id)
    }

    return (
        <div className={Styles.outterDiv}>
            <div className={Styles.wrapper}>
                <h3>Closing out ticket. Are you sure?</h3>
                <button onClick={removeTicket}>Confirm</button>
                <button onClick={(e) => toggleCloseTicket(false)}>cancel</button>
            </div>
        </div>
    );
}

export default CloseTicket;