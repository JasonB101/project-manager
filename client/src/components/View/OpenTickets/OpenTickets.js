import React, { useState } from "react";
import Styles from "./OpenTickets.module.scss";
import TicketList from "./TicketList/TicketList";
import SearchCriteria from "./SearchCriteria/SearchCriteria";
import ToolBar from "../ToolBar/ToolBar"

const OpenTickets = (props) => {
    const [searchCriteria, changeCriteria] = useState({
        projects: [],
        severity: [],
        sortBy: "newest"
    });

    const loadSortTickets = (tickets) => {
        return tickets.filter(x => {
            return (searchCriteria.projects.length === 0 || searchCriteria.projects.indexOf(x.projectName) !== -1) &&
                (searchCriteria.severity.length === 0 || searchCriteria.severity.indexOf(x.severity) !== -1);
        })
        .sort((a, b) => searchCriteria.sortBy === "newest" ? new Date(b.date) - new Date(a.date) : 
        new Date(a.date) - new Date(b.date));
    }

    const tickets = loadSortTickets(props.tickets);

    return (
        <div className={Styles.wrapper}>
            <SearchCriteria criteriaHook={[searchCriteria, changeCriteria]} />
            <TicketList tickets={tickets} />
            <ToolBar />
        </div>
    );
}

export default OpenTickets;