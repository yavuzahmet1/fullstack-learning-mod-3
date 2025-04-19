"use strict";

const router = require("express").Router();
const department = require("../controllers/department");
const {
  isLogin,
  isAdmin,
  isAdminOrLead,
} = require("../middlewares/permission");

router.route("/").get(department.list).post(department.create);

router
  .route("/:id")
  .get(isLogin, department.read)
  .put(isAdminOrLead, department.update)
  .patch(isAdminOrLead, department.update)
  .delete(isAdmin, department.delete);

module.exports = router;
