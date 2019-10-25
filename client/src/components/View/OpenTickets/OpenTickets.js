import React from "react";
import Styles from "./OpenTickets.module.scss";
import TicketList from "./TicketList/TicketList";
import SearchCriteria from "./SearchCriteria/SearchCriteria";
import ToolBar from "../ToolBar/ToolBar"

const OpenTickets = (props) => {
    const tickets = props;

    return (
        <div className={Styles.wrapper}>
            <SearchCriteria/>
            <TicketList {...tickets}/>
            <ToolBar />
       </div>
    );
}

export default OpenTickets;