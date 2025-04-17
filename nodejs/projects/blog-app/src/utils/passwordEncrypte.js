const crypto = require("node:crypto");

module.exports = (password) => {
  const salt = process.env.PASS_SALT;
  const iteration = parseInt(process.env.PASS_ITERATION); // String -> Number
  const keylen = parseInt(process.env.PASS_KEYLEN); // String -> Number
  const digest = process.env.PASS_DIGEST;

  return crypto
    .pbkdf2Sync(password, salt, iteration, keylen, digest)
    .toString("hex");
};
