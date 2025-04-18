"use strict";

const { mongoose } = require("../configs/dbConnection");
const department = require("./department");
const passwordEncrypt = require("../helpers/passwordEncrypt");

const PersonnelSchema = new mongoose.Schema(
  {
    departmentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
    username: {
      type: "String",
      trim: true,
      required: true,
      unique: true,
    },
    password: {
      type: "String",
      trim: true,
      required: true,
      set: (password) => passwordEncrypt(password),
    },
    firstName: {
      type: "String",
      trim: true,
      required: true,
    },
    lastName: {
      type: "String",
      trim: true,
      required: true,
    },
    phone: {
      type: "String",
      trim: true,
      required: true,
      unique: true,
      minLength: 11,
      math: [/^\d{11}$/, "Phone is number not valid"],
    },
    email: {
      type: "String",
      trim: true,
      required: true,
      validate: [
        (email) => email.includes("@" && email.includes(".")),
        "e-mail is not valid",
      ],
    },
    title: {
      type: "String",
      trim: true,
      required: true,
    },
    salary: {
      type: Number,
      default: 0,
    },
    description: {
      type: "String",
      trim: true,
      required: true,
    },
    isActive: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isLead: {
      type: Boolean,
      default: false,
    },
    staredAt: {
      type: Date,
      default: Date.now(),
      required: true,
    },
  },
  { collection: "personnels", timestamps: true }
);

module.exports = mongoose.model("Personnel", PersonnelSchema);
