"use strict"
//*EXPRESS & ROUTING

//initial commands
//* npm init -y
//* npm i -D nodemon
//* pnpm add express
//* echo PORT=8000>.env

//express start
const express = require("express");
const app = express();

require("dotenv").config();
const PORT = process.env?.PORT || 8000;

//*HTTP METHOD&
// app.get('/', (req, res) => res.end("called in get function"))
// app.post('/', (req, res) => res.end("called in post function"))
// app.put('/', (req, res) => res.end("called in put function"))
// app.patch('/', (req, res) => res.end("called in patch function"))
// app.delete('/', (req, res) => res.end("called in delete function"))

//runs for all method
// app.all('/', (req, res) => res.end("called in all function"))


//*app.route("/")
app.route("/")
    .get((req, res) => res.send({ method: "GET" }))
    .post((req, res) => res.send({ method: "POST" }))
    .put((req, res) => res.send({ method: "PUT" }))
    .delete((req, res) => res.send({ method: "DELETE" }))


app.listen(PORT, () => console.log("Running at : http://127.0.0.1" + PORT))