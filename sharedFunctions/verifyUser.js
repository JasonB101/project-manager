const User = require("../models/user");
const jwt = require("jsonwebtoken");

async function verifyUser(tokenWithBearer){
    const token = tokenWithBearer.replace("Bearer ", "");
    const userObect = jwt.verify(token, process.env.SECRET);
    const foundUser = [false, false];
    const user = await User.findOne({email: userObect.email}, (err, user) => {
        if (user) {
            foundUser[0] = true
            if (user.isAdmin) {
                foundUser[1] = true;
            } else {
                foundUser[1] = false
            }
        }
    })

    return foundUser
    
}

module.exports = verifyUser;