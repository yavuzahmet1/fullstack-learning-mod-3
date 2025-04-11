"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */

const router = require('express').Router();
const blogCategory = require('../controllers/blog.controller');
/* ------------------------------------------------------- */
// URL: /blogs ->

router.route("/blogs")
    .get(blogCategory.list)
    .post(blogCategory.create);

module.exports = router;