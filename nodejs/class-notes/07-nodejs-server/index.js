"use strict"
console.log("server")

require("dotenv").config()//! .env dosyasındaki verileri proccess env içine yükleriz

const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.01"

console.log(PORT)
console.log(HOST)

const http = require("node:http")//?node un içerisinden http modulunu çağırdık

const app = http.createServer((req, res) => {
    console.log("----------")

    if (req.url = "/") {
        res.end("<h1>Welcome fs18</h1>")
    }
})

app.listen(PORT, () => console.log(`server running:http://${HOST}:${PORT}`))