"use strict"

const User = require("../models/user.model");

module.exports = {
    list: async (req, res) => {
        const result = await User.find();
        res.status(200).send({
            error: false,
            result
        })
    },
    create: async (req, res) => {
        const result = await User.create(req.body);
        res.status(201).send({
            error: false,
            result
        })
    },
    read: async (req, res) => {
        // const result = await User.findOne({ _id: req.params.id });
        const result = await User.findById(req.params.id);
        res.status(200).send({
            error: false,
            result
        })
    },