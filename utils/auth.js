const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {User} = require("../db/models");
const {secret, expiresIn} = require("../config").jwtConfig


const checkLoginDetails = async (req, res, next) =>{
    console.log(req)
    const {email, password, username} = req.body;
    console.log(req.body)
    let user;
    try{
        user = await User.findOne({where: {email}});
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
        passResult = await bcrypt.compare(password, user.hashedPassword.toString())
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
    const token = await generateNewToken(username);
    req.newToken = token;
    next();
    return;
};


const generateNewToken = async (username) =>{
    return await jwt.sign({username}, secret, {expiresIn});
}

const checkToken = async (req, res, next) =>{
    const token = req.token;
    if(!token){
        res.set("WWW-Authenticate", "Bearer").status(401).end();
        return;
    }
    jwt.verify(token, secret, null, async (err, payload) =>{
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