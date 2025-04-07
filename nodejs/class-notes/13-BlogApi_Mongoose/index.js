"use strict"

const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env.PORT || 8000;

//parse data
app.use(express.json())

// cath asyn error
require("express-async-errors")

require("./src/dbConnection")

//----------------------
//routes
app.all("/", (req, res) => res.send("Welcome to Blog API"));

app.use(require("./src/middlewares/errorHandler"))

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});