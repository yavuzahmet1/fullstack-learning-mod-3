"use strict";

const router = require("express").Router();
const { list, create, read, deletee } = require("../controllers/token");
const { isAdmin } = require("../middlewares/permission");

router.route("/").get(list).post(create);

router
  .route("/:id")
  .get(read)
  .delete((req, res, next) => {}, deletee);

module.exports = router;
