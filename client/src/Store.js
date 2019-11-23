import React, { createContext, useState, useEffect } from "react";
import {
    saveTicket, updateTicket,
    deleteTicket, getAllTickets
} from "./ControllerFunctions/ticketFunctions";


export const storeData = createContext({});

const Store = (props) => {

    const [showNewTicket, toggleNewTicket] = useState(false);
    const [openTickets, setOpenTickets] = useState([]);
    const [user, setUser] = useState({
        //there are no name and token in localStorage, JSON.parse user then access value
        name: localStorage.getItem('name') || "",
        token: localStorage.getItem('token') || ""
    })

    useEffect(() => {
        if (user.token) {
            getAllTickets(setOpenTickets);
        }
    }, [user])

    const contextValue = {
        toggleNewTicket: { showNewTicket, toggleNewTicket },
        openTicketsHook: { openTickets, setOpenTickets },
        openTicketsMethods: { saveTicket, updateTicket, deleteTicket },
        token: user.token,
        setUser: setUser
    };

    return (
        <storeData.Provider value={contextValue}>
            {props.children}
        </storeData.Provider>
    );
}

export default Store;