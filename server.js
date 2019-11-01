const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const PORT = process.env.PORT || 3825;
const path = require("path");

//setup routes and logger
app.use(morgan("dev"));
app.use(express.json());
app.use("/api/tickets", require("./routes/ticketsAPI"));


// Connect to colection
mongoose.set('useCreateIndex', true)
mongoose.connect(process.env.MONGODB_URI,{
    useNewUrlParser: true
}, ((err) => {
    if (err) throw (err)
    console.log("Connected to MongoDB")
}));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))