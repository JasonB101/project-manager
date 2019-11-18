const express = require('express');
const authRouter = express.Router();
const User = require("../models/user");

authRouter.post("/newuser", (req, res, next) => {
    let newUser = new User(req.body);
    newUser.save((err, user) => {
        if (err){
            if (err.code === 11000){
                return res.send({ success: false, message: "That email address is already in use." });
            }
            return res.send({ success: false, error: err });
        } 
        
        res.send({ success: true, user: user.withoutSensitiveInfo() });
    })
});

authRouter.post("/login", (req, res, next) => {
    const { email, password } = req.body;

    User.findOne({ email: email }, (err, user) => {
        if (err) return res.status(500).send(err);
        if (!user) {
            return res.status(401).send({ success: false, message: "The email address and password combination, is incorrect." });
        }
        user.checkPassword(password, (err, isMatch) => {
            if (err) return res.status(500).send(err);
            if (!isMatch) {
                return res.status(401).send({success: false, message: "The email address and password combination, is incorrect." })
            }

            res.send(user.loginUserInfo())
        })
    })
})



module.exports = authRouter;