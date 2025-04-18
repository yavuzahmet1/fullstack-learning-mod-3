"use strict";

const router = require("express").Router();
const { list, create, read, deletee } = require("../controllers/token");

router.route("/").get(list).post(create);

router.route("/:id").get(read).delete(deletee);

module.exports = router;
