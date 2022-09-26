const express = require("express")
const routes = express.Router()
const loginRoutes = require("./loginRoutes")
const gameRoutes = require("./gameRoutes")
const homeRoutes = require("./homeRoutes")
const signUpPage = require("./signUpRoutes")
const profilePage = require("./profileRoutes")
const errorHandle = require("./errorRoutes")
const createPage = require("./createRoutes")
const deletePage = require("./delateRoutes")


routes.use("/login", loginRoutes)
routes.use("/game", gameRoutes)
routes.use("/home", homeRoutes)
routes.use("/signUp", signUpPage)
routes.use("/profile", profilePage)
routes.use("/error", errorHandle)
routes.use("/create", createPage)
routes.use("/delete", deletePage)



module.exports = routes