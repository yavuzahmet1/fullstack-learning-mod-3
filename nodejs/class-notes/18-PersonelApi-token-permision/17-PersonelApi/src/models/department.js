"use strict";

const { mongoose } = require("../configs/dbConnection");

const DepartmentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      require: true,
      unique: true,
    },
  },
  {
    collection: "departments",
    timestamps: true,
  }
);

module.exports = mongoose.model("Department", DepartmentSchema);
