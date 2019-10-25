//hook is an array [state, setState]

export const saveTicket = (hook, ticket) => {
    ticket.id = Math.floor(Math.random() * 10000);
    const { openTickets, setOpenTickets } = hook;
    localStorage.setItem("openTickets", JSON.stringify([...openTickets, ticket]));
    setOpenTickets([...openTickets, ticket]);
    
}

export const updateTicket = (hook, id, ticket) => {

}

export const deleteTicket = (hook, id) => {

}

export const completedTicket = (hook, id) => {

}

export const getOpenTickets = (hook) => {
    const setOpenTickets = hook;
    const tickets = localStorage.getItem("openTickets");
    setOpenTickets(tickets ? JSON.parse(tickets) : [])
}