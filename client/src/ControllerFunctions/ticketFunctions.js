import axios from "axios";
//hook is an array [state, setState]

export const saveTicket = (hook, ticket) => {
    const { openTickets, setOpenTickets } = hook;

    axios.post("/api/tickets", ticket)
        .then(results => {
            let ticket = results.data.ticket;
            setOpenTickets([...openTickets, ticket]);
        })


}

export const updateTicket = (hook, id, ticket) => {

}

export const deleteTicket = (hook, id) => {
    const { openTickets, setOpenTickets } = hook;
    const alteredOpenTickets = openTickets.filter(x => x._id !== id);
    setOpenTickets(alteredOpenTickets);


    axios.delete(`/api/tickets/${id}`)
        .then(result => {
            if (result.data.success === true) {

            }
        })
}

export const getAllTickets = (hook) => {
    const {token} = JSON.parse(localStorage.getItem('user'))
    const setOpenTickets = hook;
    const options = { headers: { Authorization: `Bearer ${token}` } }
    axios.get("/api/tickets", options)
        .then(result => {
            let tickets = result.data;
            setOpenTickets(tickets);
        })
}