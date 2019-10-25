import React, {createContext, useState, useEffect} from "react";
import {saveTicket, updateTicket, deleteTicket, 
        completedTicket, getOpenTickets} from "./ControllerFunctions/ticketFunctions";

export const storeData = createContext({});

const Store = (props) => {

    
    const [showNewTicket, toggleNewTicket] = useState(false);
    const [openTickets, setOpenTickets] = useState([]);

    useEffect(() => {
        getOpenTickets(setOpenTickets)

    }, [])

    const contextValue = {
        toggleNewTicket: {showNewTicket, toggleNewTicket},
        openTicketsHook: {openTickets, setOpenTickets},
        openTicketsMethods: {saveTicket, updateTicket, deleteTicket, completedTicket}
    };

    return (
        <storeData.Provider value={contextValue}>
            {props.children}
        </storeData.Provider>
    );
}

export default Store;