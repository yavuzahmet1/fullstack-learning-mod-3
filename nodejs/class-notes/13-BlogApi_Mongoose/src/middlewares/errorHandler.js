"use strict"

//?ERROR HANDLER

module.exports = (err, req, res, next) => {
    console.log("Errorhandler Worked");
    const customErrorCode = res?.customErrorCode || 500;
    res.status(customErrorCode).send({
        error: true,
        message: err.message,
    });
};