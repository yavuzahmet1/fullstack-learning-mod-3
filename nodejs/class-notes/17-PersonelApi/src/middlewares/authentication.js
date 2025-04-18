"use strict";

module.exports = async (req, res, next) => {
  req.user = null;
  // Get token from header
  const auth = req.headers?.authorization || null;
  const tokenKey = auth ? auth.split("")[1] : null;
  next();
};
