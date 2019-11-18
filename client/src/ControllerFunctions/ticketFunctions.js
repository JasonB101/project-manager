import axios from "axios";
//hook is an array [state, setState]

export const saveTicket = (hook, ticket) => {
    const { openTickets, setOpenTickets } = hook;
    const options = { headers: { ...tokenHeader() } }

    axios.post("/api/tickets", ticket, options)
        .then(results => {
            let ticket = results.data.ticket;
            setOpenTickets([...openTickets, ticket]);
        })


}

export const updateTicket = (hook, id, ticket) => {

}

export const deleteTicket = (hook, id) => {
    const { openTickets, setOpenTickets } = hook;
    const options = { headers: { ...tokenHeader() } }

    axios.delete(`/api/tickets/${id}`, options)
        .then(result => {
            if (result.data.success === true) {
                const alteredOpenTickets = openTickets.filter(x => x._id !== id);
                setOpenTickets(alteredOpenTickets);
            }
        })
        .catch(err => console.log(err.response.data.message));
}

export const getAllTickets = (hook) => {

    const setOpenTickets = hook;
    const options = { headers: { ...tokenHeader() } };
    axios.get("/api/tickets", options)
        .then(result => {
            let tickets = result.data;
            setOpenTickets(tickets);
        })
}

function tokenHeader() {
    const { token } = JSON.parse(localStorage.getItem('user'))
    return { Authorization: `Bearer ${token}` }

}