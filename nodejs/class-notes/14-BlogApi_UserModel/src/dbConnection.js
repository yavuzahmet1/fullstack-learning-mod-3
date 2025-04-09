"use strict";
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
// Mongoose ODM

const mongoose = require('mongoose');

const dbConnection = () => {
    // mongoose.connect('mongodb://localhost:27017/blogAPI') // defatul DB name -> test

    // const uri = process.env.DB_URI
    // if(!uri) throw new Error('DB_URI Not Found!');

    mongoose.connect(process.env.DB_URI || 'mongodb://localhost:27017/blogAPI') // defatul DB name -> test
        .then(() => console.log('* DB Connected *'))
        .catch((err) => console.log('! DB Not Connected !', err));
};

module.exports = dbConnection;