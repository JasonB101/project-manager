const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const PORT = process.env.PORT || 3825;
const path = require("path");
const mongoURI = process.env.MONGOLAB_BLUE_URI || "mongodb://localhost:27017/project_manager"

//setup routes and logger
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/api/tickets", require("./routes/ticketsAPI"));
app.use("/api/auth", require("./routes/authAPI"));



// Connect to colection
mongoose.set('useCreateIndex', true)
mongoose.connect(mongoURI,{
    useNewUrlParser: true
}, ((err) => {
    if (err) throw (err)
    console.log("Connected to MongoDB")
}));

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))