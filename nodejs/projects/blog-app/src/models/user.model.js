"use strict"

const mongoose = require("mongoose")
const passwordEncrypte = require("../utils/passwordEncrypte")

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
        unique: true,
        trim: true,
        // validate: (email) => {
        //     if (email.includes('@') && email.includes('.')) {
        //         return true
        //     }
        //     return new Error("invalid e-mail adres")
        // }
        validate: [(email) => {

            return email.includes('@') && email.includes('.')
        }, "invalid email address"]

    },
    password: {
        type: String,
        required: true,
        trim: true,
        set: (pass) => { return passwordEncrypte(pass) }
    },
    firstName: String,
    lastName: String
}, {
    collection: "users",
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema)