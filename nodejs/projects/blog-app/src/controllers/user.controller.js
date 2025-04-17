"use strict";

const User = require("../models/user.model");
const passwordEncrypte = require("../utils/passwordEncrypte");

module.exports = {
  list: async (req, res) => {
    const result = await User.find();
    res.status(200).send({
      error: false,
      result,
    });
  },
  create: async (req, res) => {
    const result = await User.create(req.body);
    res.status(201).send({
      error: false,
      result,
    });
  },
  read: async (req, res) => {
    // const result = await User.findOne({ _id: req.params.id });
    const result = await User.findById(req.params.id);
    res.status(200).send({
      error: false,
      result,
    });
  },
  update: async (req, res) => {
    // const result = await User.updateOne({...filter},{...data},{...option});
    // const result = await User.updateOne({ _id: req.params.id }, req.body);
    const result = await User.findOneAndUpdate(
      { _id: req.params.id },
      req.body,
      { new: true }
    );
    res.status(200).send({
      error: false,
      result,
      // new: await User.findById(req.params.id) findOneAndUpdate kullanılırsa gerek yok
    });
  },
  delete: async (req, res) => {
    const result = await User.deleteOne({ _id: req.params.id });

    if (result?.deletedCount) {
      res.sendStatus(204);
    } else {
      res.errorStatus = 404;
      throw new Error("Data is not found or already deleted");
    }
  },

  login: async (req, res) => {
    const { email, password } = req.body;
    if (email && password) {
      const user = await User.findOne({ email }); //Eşleşen ilk kaydı döndürür (eşleşme yoksa null). email değişkeniyle eşleşen kullanıcıyı arar (örneğin req.body.email).

      if (user) {
        const isMatch = await bcrypt.compare(password, user.password);
        if (isMatch) {
          //   req.session = {
          //     email: user.email,
          //     _id: user._id,
          //   };

          req.session._id = user._id;
          req.session.email = user.email;

          res.status(200).send({
            error: false,
            result: "OK",
          });
        } else {
          res.customErrorCode = 401;
          throw new Error("Wrong email or password");
        }
      }
    }
  },
};
