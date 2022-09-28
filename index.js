const express = require("express")
const app = express()
const port = 3000

app.set('views', './views')
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended : true }))
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/views'));

app.get("/", (req,res) => { 
    res.send("Ready")
})

app.listen(port, () => {
    console.log("Server is on at Port" + port );
})