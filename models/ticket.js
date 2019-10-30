const mongoose = require('mongoose')

const Schema = mongoose.Schema

const ticketSchema = new Schema({
    projectName: String,
    task: String,
    description: String,
    severity: String,
    user: String,
    date: String,
    id: String,
   
})



module.exports = mongoose.model("Ticket", ticketSchema);