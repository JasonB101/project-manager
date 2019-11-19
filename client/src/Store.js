import React, { createContext, useState, useEffect } from "react";
import {
    saveTicket, updateTicket,
    deleteTicket, getAllTickets
} from "./ControllerFunctions/ticketFunctions";
import { login } from "./ControllerFunctions/authFunctions"

export const storeData = createContext({});

const Store = (props) => {

    const [showNewTicket, toggleNewTicket] = useState(false);
    const [openTickets, setOpenTickets] = useState([]);
    const [user, setUser] = useState({
        name: localStorage.getItem('name') || "",
        token: localStorage.getItem('token') || ""
    })

    // useEffect(() => {
    //     (async () => {
    //         const successfulLogin = await login({ email: "test@test.com", password: "test" });
    //         if (successfulLogin) getAllTickets(setOpenTickets);
    //     })();
    // }, [])

    const contextValue = {
        toggleNewTicket: { showNewTicket, toggleNewTicket },
        openTicketsHook: { openTickets, setOpenTickets },
        openTicketsMethods: { saveTicket, updateTicket, deleteTicket },
        token: user.token
    };

    return (
        <storeData.Provider value={contextValue}>
            {props.children}
        </storeData.Provider>
    );
}

export default Store;