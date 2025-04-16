"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
const { getModelList, getModelListDetails } = require("../middlewares/queryHandler")
const Department = require("../configs/dbConnection");

module.exports = {
    list: async (req, res) => {
        // const result = await Department.find()
        const result = await getModelList(Department)
        res.status(200).send({
            error: false,
            details: await getModelListDetails(Department),
            result,
        })
    },
    create: async (req, res) => {

    },
    read: async (req, res) => {

    },
    update: async (req, res) => {

    },
    delete: async (req, res) => {

    }

}