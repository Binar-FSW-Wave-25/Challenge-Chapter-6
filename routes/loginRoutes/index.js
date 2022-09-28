const express = require('express')
const routes = express.Router()

routes.get("/", (req, res) => {
    res.render("loginpage")
})


module.exports = routes