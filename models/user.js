const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const Schema = mongoose.Schema;
const jwt = require("jsonwebtoken");

const userSchema = new Schema({
    email: {
        type: String,
        unique: true,
        lowercase: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean,
        required: true
    },

})

userSchema.pre("save", function (next) {
    const user = this;
    if (!user.isModified("password")) return next();
    bcrypt.hash(user.password, 10, (err, hash) => {
        if (err) return next(err)
        user.password = hash;
        next();
    })
})

userSchema.methods.withoutSensitiveInfo = function () {
    const user = this.toObject();
    delete user.password;
    delete user.isAdmin;
    return user;
}

userSchema.methods.checkPassword = function (passwordAttempt, callback) {
    bcrypt.compare(passwordAttempt, this.password, (err, isMatch) => {
        if (err) return callback(err)
        callback(null, isMatch);
    })

}

userSchema.methods.loginUserInfo = function () {
    return {
        user: {
            ...this.withoutSensitiveInfo(),
            token: jwt.sign(this.withoutSensitiveInfo(), process.env.SECRET)
        }
    }
}



module.exports = mongoose.model("User", userSchema);