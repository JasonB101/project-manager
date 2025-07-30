const express = require("express");
const app = express();
require("dotenv").config()
const mongoose = require("mongoose")
const morgan = require("morgan")
const PORT = process.env.PORT || 3825;
const path = require("path");
const mongoURI = process.env.MONGO_URI

//setup routes and logger
app.use(morgan("dev"));
app.use(express.json());

app.use(express.static(path.join(__dirname, "client", "build")))

app.use("/api/tickets", require("./routes/ticketsAPI"));
app.use("/api/auth", require("./routes/authAPI"));
app.use("/api/sprints", require("./routes/sprintsAPI"));



// Connect to collection
mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: {
        w: 'majority'
    }
})
    .then(() => console.log("Connected to MongoDB"))
    .catch(err => {
        console.error("MongoDB connection error:", err);
        console.log("Please check your MONGO_URI environment variable");
        process.exit(1);
    });

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
})

app.listen(PORT, () => console.log(`Listening on port: ${PORT}.`))