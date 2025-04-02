"use strict";
/* -------------------------------------------------------
    EXPRESSJS - TODO Project with Sequelize
------------------------------------------------------- *
 $ npm i express dotenv express-async-errors
 $ npm i sequelize
 $ npm i sqlite3
------------------------------------------------------- */

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

require('express-async-errors');

// Accept json data:
app.use(express.json())

/* ------------------------------------------------------- */
// ROUTERS:

app.all('/', (req, res) => {
    res.send('WELCOME TO TODO API')
});

app.use(require('./routes/todo.router'));

/* ------------------------------------------------------- */
// ErrorHandler
app.use(require('./middlewares/errorHandler'));
/* ------------------------------------------------------- */
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));