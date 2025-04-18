"use strict";
const Personnel = require("../models/personnel");
const Token = require("../models/token");

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;

    if ((username || email) && password) {
      const user = await Personnel.findOne({
        $or: [{ username }, { email }],
        password,
      });

      if (user) {
        if (user.isActive) {
          /* TOKEN */

          const tokenData = await Token.create();

          /* TOKEN */

          res.status(200).send({
            error: false,
            message: "OK",
          });
        } else {
          res.errorStatusCode = 401;
          throw new Error("User is not active");
        }
      } else {
        res.errorStatusCode = 401;
        throw new Error("Wrong email/username or password");
      }
    } else {
      res.errorStatusCode = 401;
      throw new Error("username/email and password required");
    }
  },

  logout: async (req, res) => {},
};
