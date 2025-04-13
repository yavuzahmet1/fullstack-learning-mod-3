const { BlogCategory, BlogPost } = require("../models/blog.model");

module.exports = {
    list: async (req, res) => {
        const result = await BlogCategory.find();
        res.status(200).send({
            error: false,
            result
        })
    }
}