"use strict";

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

//*Express.js uygulamalarında gelen HTTP request'lerin body kısmındaki JSON verilerini** otomatik olarak parse eden built-in bir middleware'dir.
app.use(express.json());

//*Amacı: Express'te async/await kullanılan route'larda oluşan hataları otomatik yakalar ve hata middleware'ine iletir.
require("express-async-errors");

// const dbConnection = require("./src/dbConnection")
// dbConnection()
require("./src/dbConnection")();

//session-cookies
const session = require("cookie-session");
app.use(
  session({
    secret: process.env.PASS_SALT,
    maxAge: 1000 * 60 * 60 * 24 * 3, //sessionun süresini belirlediğimiz alan,sessionlara süre verdiğimizde cookie oluyor
  })
);

//main-route
app.all("/", (req, res) => {
  res.send({
    message: "Welcome To Blog App",
    session: req.session,
  });
});

//blog-routes
app.use("/blogs", require("./src/routes/blog.router"));

app.use("/users", require("./src/routes/user.router"));

//error handler
app.use(require("./src/middlewares/errorHanler"));

app.listen(PORT, () => console.log(`Running at at http://127.0.0.1:${PORT}`));
