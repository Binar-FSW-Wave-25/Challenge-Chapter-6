const express = require('express')
const app = express()
const port = 3000
const routes = require("./routes")

app.set('views', './views') // specify the views directory
app.use(express.static(__dirname + '/views'));
app.use("/public", express.static("public"))

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.set('view engine', 'ejs')

app.use(routes)

app.listen(port, () => {
    console.log(`YOU'RE LISTENING TO DJ ${port}!!`)
})