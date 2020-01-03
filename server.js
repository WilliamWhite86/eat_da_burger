const express = require("express")
const app = express()

var PORT = process.env.PORT || 3000

app.use(express.static("public"))

//Pares request body as JSON
app.use(express.urlencoded({extended: true}))
app.use(express.json())

//Set handlebars
var exphbs = require("express-handlebars")

app.engine("handlebars", exphbs({ defaultLayout: "main"}))
app.set("view engine","handlebars")

//Import routes and give server access
var routes = require("./controllers/burgersController.js")

app.use(routes)
app.listen(PORT, function(){
    console.log("App listening at localhost:" + PORT)
})