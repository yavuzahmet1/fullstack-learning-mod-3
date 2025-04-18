"use strict";
/* -------------------------------------------------------
    EXPRESS - Personnel API
------------------------------------------------------- */
/*
    $ npm i express dotenv mongoose express-async-errors
    $ npm i cookie-session
    $ npm i jsonwebtoken
*/
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

/* ------------------------------------------------------- */

// Middlewares:
app.use(express.json());
require("express-async-errors");

// Session-Cookies
const session = require("cookie-session");

app.use(
  session({
    secret: process.env.SECRET_KEY,
  })
);

require("./src/configs/dbConnection");

app.use(require("./src/middlewares/authentication"));

// Query Handler:
app.use(require("./src/middlewares/queryHandler"));

/* ------------------------------------------------------- */
// Routes:
app.all("/", (req, res) => {
  res.send({
    message: "WELCOME TO PERSONNEL API",
  });
});

app.use("/departments", require("./src/routes/department"));

app.use("/tokens", require("./src/routes/token"));

app.use("/auth", require("./src/routes/auth"));

// Error Handler:
app.use(require("./src/middlewares/errorHandler"));

// RUN SERVER:
app.listen(PORT, () => console.log("Running: http://127.0.0.1:" + PORT));

//! Syncronization : Run it only once.
require("./src/helpers/sync")();
