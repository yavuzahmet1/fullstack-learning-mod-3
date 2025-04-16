"use strict"
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
// app.use(errorHandler):

module.exports = (err, req, res, next) => {
    
    res.status(res.errorStatusCode ?? 500).send({
        error: true,
        message: err.message,
        cause: err.cause,
        // stack: err.stack, 
    })
}


