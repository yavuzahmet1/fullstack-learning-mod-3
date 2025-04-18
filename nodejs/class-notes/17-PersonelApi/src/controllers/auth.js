"use strict";

module.exports = {
  login: async (req, res) => {
    const { username, email, password } = req.body;
    if ((username || email) && password) {
      const user = await Personnel.findOne({ $or: [{ username }, { email }] });
      res.status(200).send({
        error: false,
        message: "Ok",
      });
    } else {
      res.errorStatusCode = 401;
      throw new Error("username/email and password required");
    }
  },
  logout: async (req, res) => {},
};
