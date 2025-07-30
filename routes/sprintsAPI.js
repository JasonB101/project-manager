const express = require("express");
const sprintRouter = express.Router();
const Sprint = require("../models/sprint");
const verifyUser = require("../sharedFunctions/verifyUser");

// Get all sprints
sprintRouter.get("/", (req, res) => {
    Sprint.find()
        .then(sprints => res.json(sprints))
        .catch(err => res.status(500).json({ error: err.message }));
});

// Get sprint by ID
sprintRouter.get("/:id", (req, res) => {
    Sprint.findById(req.params.id)
        .then(sprint => {
            if (!sprint) {
                return res.status(404).json({ message: "Sprint not found" });
            }
            res.json(sprint);
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

// Create new sprint
sprintRouter.post("/", (req, res) => {
    const newSprint = new Sprint(req.body);
    newSprint.save()
        .then(sprint => res.status(201).json(sprint))
        .catch(err => res.status(400).json({ error: err.message }));
});

// Update sprint
sprintRouter.put("/:id", (req, res) => {
    Sprint.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(sprint => {
            if (!sprint) {
                return res.status(404).json({ message: "Sprint not found" });
            }
            res.json(sprint);
        })
        .catch(err => res.status(400).json({ error: err.message }));
});

// Delete sprint
sprintRouter.delete("/:id", (req, res) => {
    Sprint.findByIdAndDelete(req.params.id)
        .then(sprint => {
            if (!sprint) {
                return res.status(404).json({ message: "Sprint not found" });
            }
            res.json({ message: "Sprint deleted successfully" });
        })
        .catch(err => res.status(500).json({ error: err.message }));
});

module.exports = sprintRouter;
