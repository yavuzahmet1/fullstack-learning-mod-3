"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const User = require('../models/user.model');
const passwordEncrypte = require('../utils/passwordEncrypte');

module.exports = {

    list: async (req, res) => {

        const result = await User.find();

        res.status(200).send({
            error: false,
            result
        });
    },

    create: async (req, res) => {

        if (!req.body.password && req.body.password.length < 8) {
            res.errorStatusCode = 400
            throw new Error('The Password must be more than 8 character.')
        }

        const result = await User.create(req.body);

        res.status(201).send({
            error: false,
            result
        });
    },


    read: async (req, res) => {

        // const result = await User.findOne({...filter});
        // const result = await User.findOne({ _id: req.params.id });
        const result = await User.findById(req.params.id);

        res.status(200).send({
            error: false,
            result
        });
    },

    update: async (req, res) => {

        // const result = await User.updateOne({...filter}, {...data}, {...?options})
        // const result = await User.findOneAndUpdate({...filter}, {...data}, {...?options})

        //* response from updateOne : {
        // "acknowledged": true, // if update methods ends successfuly.
        // "modifiedCount": 1, // if returns 0 : no any data updated cause data is already up to date.
        // "upsertedId": null, //  No new document was inserted. Combination of update and insert.
        // "upsertedCount": 0, // Since nothing was inserted, no new ID.
        // "matchedCount": 1 // number of data matches with our filter.
        // }

        // const result = await User.updateOne({ _id: req.params.id }, req.body);
        // const result = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        const result = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });

        res.status(200).send({
            error: false,
            result,
            // new: await User.findById(req.params.id)
        });
    },

    delete: async (req, res) => {

        const result = await User.deleteOne({ _id: req.params.id });

        if (result?.deletedCount) {
            res.sendStatus(204);
        } else {
            res.errorStatusCode = 404;
            throw new Error("Data is not found or already deleted");
        }
    },


    login: async (req, res) => {

        // const email = req.body.email;
        const { email, password } = req.body;

        if (email && password) {

            const user = await User.findOne({ email });

            if (user) {

                if (user.password == passwordEncrypte(password)) {

                    /*  Session */
                    // req.session = {
                    //     email: user.email,
                    //     _id: user._id
                    // };
                    req.session._id = user._id;
                    req.session.email = user.email;
                    /*  Session */

                    /*  Cookie */
                    if (req.body?.rememberMe == true) {
                        req.session.rememberMe = true
                        req.sessionOptions.maxAge = 1000 * 60 * 60 * 24 * 3
                    }
                    /*  Cookie */

                    res.status(200).send({
                        error: false,
                        message: 'Login is succesful.',
                        user
                    });

                } else {
                    res.errorStatusCode = 401;
                    throw new Error('Wrong email or password');
                }

            } else {
                res.errorStatusCode = 401;
                throw new Error('Wrong email or password');
            }

        } else {
            res.errorStatusCode = 401;
            throw new Error('Email and Password are required');
        }
    },

    logout: async (req, res) => {

        req.session = null;

        res.status(200).send({
            error: false,
            message: "Logout is succesful"
        })
    }
}