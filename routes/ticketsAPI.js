const express = require("express")
const ticketRouter = express.Router();
const Ticket = require("../models/ticket");
const verifyUser = require("../sharedFunctions/verifyUser")

ticketRouter.post("/", async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return missingToken(res)();
    
    try {
        const newTicket = new Ticket(req.body);
        const ticket = await newTicket.save();
        return res.status(200).send({ message: "success", ticket: ticket });
    } catch (err) {
        return res.status(500).send({ success: false, err });
    }
})

ticketRouter.get("/", async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return missingToken(res)();

    const [validUser, admin] = await verifyUser(token);

    if (validUser) {
        try {
            const tickets = await Ticket.find();
            return res.send(tickets);
        } catch (err) {
            res.status(500);
            return next(err);
        }
    } else {
        return res.status(403).send({message: "You must be logged in."})
    }

})

ticketRouter.delete("/:id", async (req, res, next) => {
    const token = req.headers.authorization;
    if (!token) return missingToken(res)();

    const [validUser, admin] = await verifyUser(token);
    
    if (admin) {
        try {
            let id = req.params.id;
            await Ticket.findByIdAndRemove(id);
            return res.status(200).send({ success: true });
        } catch (err) {
            console.log(err);
            return res.status(500).send({ message: "Internal Server Error" });
        }
    } else {
        return res.status(401).send({ message: "You are not authorized to remove tickets." })
    }

})

function missingToken(res) {
    return () => res.status(401).send({ message: "Authorization Token missing, you must be logged in." })
}

module.exports = ticketRouter