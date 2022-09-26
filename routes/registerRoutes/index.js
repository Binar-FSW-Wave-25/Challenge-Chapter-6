const express = require('express')
const routes = express.Router()
const { UserData } = require("../../models")

routes.get("/", (req, res) => {
    res.render("registerPage")
})

routes.post("/", async (req, res) => {
    try {
        let { username, email, password, role } = req.body
        let userInput = {
            username,
            email,
            password,
            role
            }
            let result = await UserData.create(userInput)
            
            if (result) {
                res.redirect("/login")
            }

        
    } catch (error) {
        console.log(error, "Error Detected");
    }
})

module.exports = routes