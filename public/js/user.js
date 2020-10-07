"use strict";

const bcrypt = require("bcryptjs");

module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define(
        "User",
        {
            email: { type: DataTypes.STRING, allowNull: false, unique: true },
            username: { type: DataTypes.STRING, allowNull: false, unique: true },
            hashedPassword: {
                type: DataTypes.STRING.BINARY,
                allowNull: false,
            },
        },
        {}
    );

    User.prototype.validatePassword = function (password) {
        return bcrypt.compareSync(password, this.hashedPassword.toString());
    };

    return User;
};
