const express = require("express")
const ticketRouter = express.Router();
const Ticket = require("../models/ticket")

ticketRouter.post("/", (req, res, next) => {
    const newTicket = new Ticket(req.body)
        newTicket.save((err, ticket) => {
            if (err) return res.status(500).send({ success: false, err });
            return res.status(200).send({message: "success", ticket: ticket});
        })
})

ticketRouter.get("/", (req, res, next) => {

    Ticket.find((err, tickets) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.send(tickets)
    });
})

ticketRouter.delete("/:id", (req, res, next) => {
    let id = req.params.id;
    
    Ticket.findByIdAndRemove(id, (err, ticket) => {
        if (err) {
            console.log(err)
            return res.send({success: false})
        }
        return res.send({success: true});
    })
})

module.exports = ticketRouter