const router = require("express").Router();
const { blogCategory, blogPost } = require("../controllers/blog.controller");

router.route("/category")
    .get(blogCategory.list)
    .post(blogCategory.create);

router.route("/category/:id")
    .get(blogCategory.read)
    .put(blogCategory.update)
    .patch(blogCategory.update)
    .delete(blogCategory.delete)

router.route("/post")
    .get(blogPost.list)
    .post(blogPost.create);

router.route("/post/:id")
    .get(blogPost.read)
    .put(blogPost.update)
    .patch(blogPost.update)
    .delete(blogPost.delete)

module.exports = router;