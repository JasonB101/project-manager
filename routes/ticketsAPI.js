const express = require("express")
const ticketRouter = express.Router();
const Ticket = require("../models/ticket")

ticketRouter.post("/", (req, res, next) => {
    const newTicket = new Ticket(req.body)
        newTicket.save((err, ticket) => {
            if (err) return res.status(500).send({ success: false, err });
            return res.status(200).send({message: "success"});
        })
})

module.exports = ticketRouter