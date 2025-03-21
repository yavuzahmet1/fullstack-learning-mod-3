"use strict"
console.log("server")

//' npm install dotenv

require("dotenv").config() //! .env dosyasındaki verileri process env içine yükleriz

const PORT = process.env?.PORT || 8000
const HOST = process.env?.HOST || "127.0.0.1"

console.log(PORT)
console.log(HOST)

const http = require("node:http") //? node un içersinden http modulunu çagırdık

const app = http.createServer((req, res) => {  //! Piyasa standartı olarak app şeklinde isimlendirilir

    console.log("----------------------")
    //   if(req.url == "/"){
    //     res.end('<h1>WELCOME FS18</h1>')
    //   }
    //  else if (req.url == "/blogs"){
    //     res.end('<h1>Listelenen bloglar</h1>')
    //  }
    //  else if (req.url= "/newBlog"){
    //     res.end('<h1> yeni blog olustur</h1>')
    //  }


    /* -------------------------------------------------------------------------- */

    // if(req.url== "/"){
    //     res.write("this")
    //     res.write(' ')
    //     res.write("is")
    //     res.write("home")
    //     res.write("page")
    // }
    // res.end()

    /* -------------------------------------------------------------------------- */

    if (req.url == "/") {
        if (req.method == 'GET') { //' default u zaten gettir
            res.end('<h1>Welcome to homepage</h1>')
        }
        else if (req.method == "POST") { //' eğer ki metodumuz post ise
            res.statusCode = 200 //' default 200 dür
            res.statusMessage = "Post yaptin" //' mesaj döndürür ve ASLA türkçe karakter olmamalı hata verir
            res.end(" post methods")

        }
        else if (req.method == 'DELETE') {
            res.writeHead(405, "silme yapamazsin", {
                "Content-Type": "text/html",  //* yanıtın içeriğinin html olduğunu belirtir
                "another-header": "another content", //* mzel bir header alanı ekler
                "another-header1": "eklemek istedim "
            })
            res.end("bu metodu kullanamazsin")
        }

    } else if (req.url == "/list") {
        const obj = {
            "error ": false,
            "message": "this is list page",

        }
        res.end(JSON.stringify(obj))
    }

})


app.listen(PORT, () => console.log(`server running : http://${HOST}:${PORT}`)) //'Belirtilen host ve portta dinleyip çalıştır