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
    const { openTickets, setOpenTickets } = hook;
    const alteredOpenTickets = openTickets.filter(x => x.id != id);

    localStorage.setItem("openTickets", JSON.stringify(alteredOpenTickets));
    setOpenTickets(alteredOpenTickets);


}

export const getOpenTickets = () => {
    const tickets = localStorage.getItem("openTickets");

    //This will eventually return a promise from axios
    return tickets ? JSON.parse(tickets) : [];
}