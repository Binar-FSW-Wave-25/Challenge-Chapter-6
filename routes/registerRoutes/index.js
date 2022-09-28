const routes = require("express").Router()

 routes.get("/", (req, res) => {
    res.render("registerpage")
 })


module.exports = routes