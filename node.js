let express = require("express")
let app = express()
let path = require("path")
let port = 8000
let hbs = require("hbs")
let fs = require("fs")
let pathresolve = path.resolve(__dirname,"../Portfolio/template/views/index.hbs")
let pathhtml=path.resolve(__dirname,"../Portfolio/index.html")
let fileext = path.extname(pathresolve)
let filehtml=path.extname(pathhtml)
console.log(fileext)
let path1 = path.join(__dirname, "../Portfolio/template/views")
let path2 = path.join(__dirname, "../Portfolio/template/partials")
app.set("view engine", "hbs")
app.set("views", path1)
hbs.registerPartials(path2)
app.get("/", (req, res) => {
    if (req.url == "/") {
        if (req.method == "GET") {
            if (fileext == ".hbs") {
                res.render("index")
            }
            else if(filehtml=="html") {
                res.send("<h1>Serve is done</h1>")
            }
            else {
                console.log("Sorry the file extension is not find")
            }
        }
        else {
            console.log("sorry the method is not find")
        }
    }
    else {
        console.log("sorry url is not find")
    }
})
app.listen(port, () => {
    console.log("server is listening to the port 8000")
})