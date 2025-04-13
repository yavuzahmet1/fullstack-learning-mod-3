const { BlogCategory, BlogPost } = require("../models/blog.model");

module.exports.blogCategory = {
    list: async (req, res) => {
        const result = await BlogCategory.find();
        res.status(200).send({
            error: false,
            result
        })
    },
    create: async (req, res) => {
        const result = await BlogCategory.create(req.body);
        res.status(201).send({
            error: false,
            result
        })
    },
    read: async (req, res) => {
        // const result = await BlogCategory.findOne({ _id: req.params.id });
        const result = await BlogCategory.findById(req.params.id);
        res.status(200).send({
            error: false,
            result
        })
    },
    update: async (req, res) => {
        // const result = await BlogCategory.updateOne({...filter},{...data},{...option});
        // const result = await BlogCategory.updateOne({ _id: req.params.id }, req.body);
        const result = await BlogCategory.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true });
        res.status(200).send({
            error: false,
            result,
            // new: await BlogCategory.findById(req.params.id) findOneAndUpdate kullanılırsa gerek yok
        })
    },
    delete: async (req, res) => {

        const result = await BlogCategory.deleteOne({ _id: req.params.id });

        if (result?.deletedCount) {
            res.sendStatus(204);
        } else {
            res.errorStatus = 404;
            throw new Error("Data is not found or already deleted")
        }
    },

}
