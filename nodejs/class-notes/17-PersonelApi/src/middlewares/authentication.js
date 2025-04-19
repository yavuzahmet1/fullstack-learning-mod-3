"use strict";

module.exports = async (req, res, next) => {
  req.user = null;
  // Get token from header
  const auth = req.headers?.authorization || null;
  const tokenKey = auth ? auth.split("")[1] : null;

  if (tokenKey && tokenKey[0] == "Token") {
    const tokenData = await Token.findOne({ token: tokenKey[1] }).populate(
      "userId"
    );
    if (tokenData) req.user = tokenData.userId;
  }
  next();
};
