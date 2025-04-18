"use strict";

const Token = require("../configs/dbConnection");

module.exports = {
  list: async (req, res) => {
    // const result = await Token.find()
    const result = await res.getModelList(Token);

    res.status(200).send({
      error: false,
      details: await res.getModelListDetails(Token),
      result,
    });
  },
  create: async (req, res) => {
    const result = await Token.create(req.body);

    res.status(201).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    const result = await Token.findOne({ _id: req.params.id });
    res.status(200).send({
      error: false,
      result,
    });
  },

  deletee: async (req, res) => {
    const result = await Token.deleteOne({ _id: req.params.id });
    res.status(result.deleteCount ? 204 : 404).send({
      error: true,
      result: "Data is not found or delete",
    });
  },
};
