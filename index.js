const express = require("express")
const app = express()
const port = 3000
const routes = require("./routes")

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));

app.get("/", (req,res) => { 
    res.send("Ready")
})

app.use(routes)

app.listen(port, () => {
    console.log("Server is on at Port" + port );
})