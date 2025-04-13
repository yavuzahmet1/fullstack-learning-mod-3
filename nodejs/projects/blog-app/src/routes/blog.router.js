const router = require("express").Router();
const { blogCategory, blogPost } = require("../controllers/blog.controller");

router.route("/blogs")
    .get(blogCategory.list)
    .post(blogCategory.create);

router.route("/blogs/:id")
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete)

router.route("/blogs")
    .get(blogPost.list)
    .post(blogPost.create);

router.route("/blogs/:id")
    .get(blogPost.read)
    .put(blogPost.update)
    .patch(blogPost.update)
    .delete(blogPost.delete)

module.exports = router;