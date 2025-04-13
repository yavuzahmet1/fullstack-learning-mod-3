const router = require("express").Router();
const blogCategory = require("../controllers/blog.controller");

router.route("/blogs")
    .get(blogCategory.list)
    .post(blogCategory.create);

module.exports = router;