const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../db/models");
const {secret, expiresIn} = require("../config")


const checkLoginDetails = async (req, res, next) =>{
    const {email, password, username} = req.body;
    try{
        const user = await User.findOne({where: {username}});
    } catch(e){
        if(!req.error){
            req.error = [];
        };
        req.error.push("Could not access database. Try again later");
        const err = new Error(e);
        err.status = 500;
        next(err)
    }
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
    req.token = token;
    next();
    return;
};


const generateNewToken = async (username) =>{
    return jwt.sign({username}, secret, {expiresIn})
}

const checkToken = async (req, res, next) =>{
    const token = req.token;
    if(!token){
        res.set("WWW-Authenticate", "Bearer").status(401).end();
        return;
    }
    jwt.verify(token, secret, null, (err, payload) =>{
        if(err || !payload){
            res.set("WWW-Authenticate", "Bearer").status(401).end();
            return;
        }
        const {username} = payload.data;
        try{
            const user = await User.findOne({where: {username}});
        } catch(e){
            if(!req.error){
                req.error = [];
            };
            req.error.push("Could not access database. Try again later");
            const err = new Error(e);
            err.status = 500;
            next(err)
        }
        req.user = user;
        if(!user){
            res.set("WWW-Authenticate", "Bearer").status(401).end();
            return;
        };
        next();
        return
    });

};

module.exports = {checkToken, checkLoginDetails, generateNewToken}