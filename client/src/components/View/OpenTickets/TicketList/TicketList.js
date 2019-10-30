import React from "react";
import Styles from "./TicketList.module.scss";
import Ticket from "../../Ticket/Ticket";


const TicketList = (props) => {
    const tickets = props.tickets.map(x => <Ticket key={x._id} {...x}/>);


    return (
        <div className={Styles.wrapper}>
            {tickets}
       </div>
    );
}

export default TicketList;