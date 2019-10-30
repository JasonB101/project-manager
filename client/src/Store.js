import React, {createContext, useState, useEffect} from "react";
import {saveTicket, updateTicket, 
        deleteTicket, getOpenTickets} from "./ControllerFunctions/ticketFunctions";

export const storeData = createContext({});

const Store = (props) => {

    const [showNewTicket, toggleNewTicket] = useState(false);
    const [openTickets, setOpenTickets] = useState([]);

    useEffect(() => {
        let tickets = getOpenTickets();
        setOpenTickets(tickets);

    }, [])

    const contextValue = {
        toggleNewTicket: {showNewTicket, toggleNewTicket},
        openTicketsHook: {openTickets, setOpenTickets},
        openTicketsMethods: {saveTicket, updateTicket, deleteTicket}
    };

    return (
        <storeData.Provider value={contextValue}>
            {props.children}
        </storeData.Provider>
    );
}

export default Store;