const express = require("express")
const ticketRouter = express.Router();
const Ticket = require("../models/ticket");
const verifyUser = require("../sharedFunctions/verifyUser")

ticketRouter.post("/", (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return missingToken(res)();
    
    const newTicket = new Ticket(req.body)
    newTicket.save((err, ticket) => {
        if (err) return res.status(500).send({ success: false, err });
        return res.status(200).send({ message: "success", ticket: ticket });
    })
})

ticketRouter.get("/", async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return missingToken(res)();

    const [validUser, admin] = await verifyUser(token);

    if (validUser) {
        Ticket.find((err, tickets) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.send(tickets)
        });
    } else {
        return res.status(403).send({message: "You must be logged in."})
    }

})

ticketRouter.delete("/:id", async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return missingToken(res)();

    const [validUser, admin] = await verifyUser(token);
    
    if (admin) {
        let id = req.params.id;

        Ticket.findByIdAndRemove(id, (err, ticket) => {
            if (err) {
                console.log(err)
                return res.status(500).send({ message: "Internal Server Error" })
            }
            return res.status(200).send({ success: true });
        })
    } else {
        return res.status(401).send({ message: "You are not authorized to remove tickets." })
    }

})

function missingToken(res) {
    return () => res.status(401).send({ message: "Authorization Token missing, you must be logged in." })
}

module.exports = ticketRouter