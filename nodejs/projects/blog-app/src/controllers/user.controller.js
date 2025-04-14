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
    update: async (req, res) => {
        // const result = await User.updateOne({...filter},{...data},{...option});
        // const result = await User.updateOne({ _id: req.params.id }, req.body);
        const result = await User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).send({
            error: false,
            result,
            // new: await User.findById(req.params.id) findOneAndUpdate kullanılırsa gerek yok
        })
    },
    delete: async (req, res) => {

        const result = await User.deleteOne({ _id: req.params.id });

        if (result?.deletedCount) {
            res.sendStatus(204);
        } else {
            res.errorStatus = 404;
            throw new Error("Data is not found or already deleted")
        }
    },

}