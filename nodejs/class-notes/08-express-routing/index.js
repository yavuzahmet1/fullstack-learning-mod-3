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
// app.route("/")
//     .get((req, res) => res.send({ method: "GET" }))
//     .post((req, res) => res.send({ method: "POST" }))
//     .put((req, res) => res.send({ method: "PUT" }))
//     .delete((req, res) => res.send({ method: "DELETE" }))

// //*URL (Path) options
// app.get("/", (req, res) => res.send("in 'root' path"))
// app.get("/path", (req, res) => res.send("in path"))

// //express urls supported JokerChar
// app.get('/abc(x?)123', (req, res) => res.send("in abc(x)123"))
// app.get('/abc(x+)123', (req, res) => res.send("in abc(x+)123"))//abc123 or abcx...123
// app.get('/abc(*)123', (req, res) => res.send("in abc(*)123"))//abc123 or abcx...123

// //express urls supported regexp
// app.get(/xyz/, (req, res) => res.send("in /xyz/"))//url contains="xyz"
// app.get(/^\xyz/, (req, res) => res.send("in /^xyz/"))//url startwith="xyz"
// app.get(/xyz$/, (req, res) => res.send("in /xyz$/"))//url endwith="xyz"

// *URL Parameters

// app.get('/blogs/:blogId/:author/search', (req, res) => {
//     console.log(req)

//     res.send({
//         params: req.params,
//         blogId: req.params.blogId,
//         author: req.params.author,
//         query: req.query,
//         title: req.query.title,
//         url: {
//             protocol: req.protocol,
//             submain: req.subdomains,
//             hostname: req.hostname,
//             path: req.path,
//             originUrls: req.originalUrl

//         }
//     })
// })

//*Response Methods
app.get('/', (req, res) => {
    // res.sendStatus(201);//created yazar
    res.status(201);

    res.send({
        message: "Response Methods"
    })
})







app.listen(PORT, () => console.log("Running at : http://127.0.0.1" + PORT))