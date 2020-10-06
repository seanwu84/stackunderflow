const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../db/models");
const {secret, expiresIn} = require("../config")


const checkLoginDetails = async (req, res, next) =>{
    const {email, password, username} = req.body;
    const user = await User.findOne({where: {email}});
    let passResult = false;
    if(user){
        passResult = bcrypt.compare(password, user.hashedPassword.toString())
    }
    if(!user || !passResult){
        if(!req.errors){
            req.errors = [];
        }
        req.errors.push("Email or Password is incorrect")
        const err = new Error("Email or Password is incorrect");
        err.status = 401;
        next(err);
        return;
    }
    const token = generateNewToken(username);
    req.newToken = token;
    next();
    return;
};


const generateNewToken = async (username) =>{
    return jwt.sign({username}, secret, {expiresIn})
}