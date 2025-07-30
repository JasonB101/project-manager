const express = require('express');
const authRouter = express.Router();
const User = require("../models/user");

authRouter.post("/newuser", async (req, res, next) => {
    try {
        let newUser = new User(req.body);
        const user = await newUser.save();
        res.send({ success: true, user: user.withoutSensitiveInfo() });
    } catch (err) {
        if (err.code === 11000){
            return res.send({ success: false, message: "That email address is already in use." });
        }
        return res.send({ success: false, error: err });
    }
});

authRouter.post("/login", async (req, res, next) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(401).send({ success: false, message: "Incorrect Login Credentials" });
        }

        user.checkPassword(password, (err, isMatch) => {
            if (err) return res.status(500).send({ success: false, message: "Server error" });
            if (!isMatch) {
                return res.status(401).send({success: false, message: "Incorrect Login Credentials" });
            }

            res.send(user.loginUserInfo());
        });
    } catch (err) {
        return res.status(500).send({ success: false, message: "Server error" });
    }
})



module.exports = authRouter;