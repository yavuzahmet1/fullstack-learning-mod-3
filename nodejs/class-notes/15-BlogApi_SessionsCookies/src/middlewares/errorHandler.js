'use strict';

/* -------------------------------------------------------
                EXPRESSJS - Error Handler 
------------------------------------------------------- */


module.exports = (err, req, res, next) => {
    console.log("Errorhandler Worked");
    const errorStatusCode = res?.errorStatusCode || 500;
    res.status(errorStatusCode).send({
        error: true,
        message: err.message,
        // cause: err.cause,
        // stack: err.stack, 
    });
};