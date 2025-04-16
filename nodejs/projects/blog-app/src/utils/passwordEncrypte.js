const cyripto = require("node:crypto");

module.exports = (password) => {
    const salt = process.env.PASS_SALT
    const iteration = process.env.PASS_ITERATION;
    const keylen = process.env.PASS_KEYLEN; //write 32 for 64
    const digest = process.env.PASS_DIGEST;


    return cyripto.pbkdf2Sync(password, salt, iteration, keylen, digest).toString("hex")
}