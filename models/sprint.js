const mongoose = require('mongoose')

const Schema = mongoose.Schema

const sprintSchema = new Schema({
    sprintName: String,
    start: String,
    deadline: String,
    tickets: Array,
    completed: Boolean,
    user: String,
    date: String,
    id: String,
   
})



module.exports = mongoose.model("Sprint", sprintSchema);