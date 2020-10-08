const express = require("express");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { asyncHandler, handleValidationErrors } = require("../../utils/utils");
const {verifyForBackend, checkLoginDetails, generateNewToken} = require("../../utils/auth");
const router = express.Router();
const db = require("../../db/models");

const { User } = db;

const validateEmailAndPassword = [
    check("email")
        .exists({ checkFalsy: true })
        .isEmail()
        .withMessage("Please provide a valid email."),
    check("password")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a password."),
    handleValidationErrors,
];

router.post(
    "/",
    check("username")
        .exists({ checkFalsy: true })
        .withMessage("Please provide a username"),
    validateEmailAndPassword,
    asyncHandler(async (req, res) => {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({ username, email, hashedPassword });

        const token = generateNewToken(user);
        res.status(201).json({
            user: { id: user.id },
            token,
        });
    })
);


router.post("/token", checkLoginDetails, (req, res, next) =>{
    res.json({token: req.newToken})
});

//this sends back the username as a test route
router.get("/test-token", verifyForBackend, (req, res)=>{
    res.send(req.user.username)
})

module.exports = router;
