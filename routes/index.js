const express = require("express")
const routes = express.Router()
const loginRoutes = require("./loginRoutes")
const registerRoutes = require("./registerRoutes")


routes.use("/login", loginRoutes)
routes.use("/register", registerRoutes)



module.exports = routes