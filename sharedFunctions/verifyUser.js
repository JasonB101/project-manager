const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function verifyUser(tokenWithBearer) {
    try {
        const token = tokenWithBearer.replace("Bearer ", "");
        const userObject = jwt.verify(token, process.env.SECRET);
        
        const user = await User.findOne({ email: userObject.email });
        
        if (user) {
            const isAdmin = user.isAdmin || false;
            console.log(`User verified: ${user.email}, Admin: ${isAdmin}`);
            return [true, isAdmin];
        } else {
            console.log("User not found in database");
            return [false, false];
        }
    } catch (error) {
        console.log("Token verification failed:", error.message);
        return [false, false];
    }
}

module.exports = verifyUser;