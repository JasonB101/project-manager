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

    useEffect(() => {
        (async () => {
            //need to create a function that handles login elsewhere, this is for testing purpose only.
            const user = await login({ email: "test@test.com", password: "test" })
                .catch(err => console.log(err.response.data.message));

            if (user) {
                localStorage.setItem("user", JSON.stringify(user.data.user));
                getAllTickets(setOpenTickets);
            }
        })();
    }, [])

    const contextValue = {
        toggleNewTicket: { showNewTicket, toggleNewTicket },
        openTicketsHook: { openTickets, setOpenTickets },
        openTicketsMethods: { saveTicket, updateTicket, deleteTicket }
    };

    return (
        <storeData.Provider value={contextValue}>
            {props.children}
        </storeData.Provider>
    );
}

export default Store;