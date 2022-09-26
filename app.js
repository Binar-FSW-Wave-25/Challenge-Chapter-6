const express = require("express")
const app = express()
const PORT = 3000
const routes = require("./routes")


app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

app.use(express.static(`public`))
app.use(`/assets`, express.static(__dirname + `public/assets`))
app.use(`/script`, express.static(__dirname + `public/script`))
app.use(`/style`, express.static(__dirname + `public/style`))

app.use((err, req, res, next) => {
    req.status(300).json({
        "status": 300,
        "message": err.message
    })
})

app.set('view engine', 'ejs')

app.use(routes)

app.listen(PORT, () => {
    console.log(`Server Menyala di PORT ` +PORT);
})