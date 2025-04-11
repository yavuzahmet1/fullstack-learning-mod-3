"use strict";

/* -------------------------------------------------------
        EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const mongoose = require('mongoose');

// Password Encryption:
// https://nodejs.org/docs/latest/api/crypto.html#cryptopbkdf2syncpassword-salt-iterations-keylen-digest

const crypto = require('node:crypto');

const passwordEncrypte = (password) => {

    const salt = 'asdfkash24323r983gakjhf92813yrsdfaskj';
    const iteration = 100000;
    const keylen = 32; // write 32 for 64
    const digest = 'sha512';

    return crypto.pbkdf2Sync(password, salt, iteration, keylen, digest).toString('hex');
}

const UserSchema = new mongoose.Schema({

    email: {
        type: String,
        required: [true, 'Email field is required'],
        unique: [true, 'This email address is already in use.'],
        trim: true,
        //* How validate works?
        // validate: (email) => { return false }

        //* Throw validation error
        // validate: (email) => {
        //     if (email.includes('@') && email.includes('.')) {
        //         return true
        //     }
        //     throw new Error('invalid email address')
        // },

        validate: [(email) => {
            return (email.includes('@') && email.includes('.'))
        }, 'Invalid email address']
    },

    password: {
        type: String,
        required: [true, 'Password field is required'],
        trim: true,
        //* How set works ?
        // set:()=> { return 'clarusway'}

        //* Using crypto module in set method
        // set: (pass) => { return passwordEncrypte(pass) }

        set: passwordEncrypte
    },

    firstName: String,
    lastName: String

}, {
    collection: 'users',
    timestamps: true
});

module.exports = mongoose.model('User', UserSchema);