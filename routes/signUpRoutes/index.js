const express = require("express")
const routes = express.Router()
const { userDataGame } = require("../../models")

routes.get("/", (req, res) => {
    res.render("signUpPage")
})

routes.post("/", async (req, res) => {
    try {
        let { UserName, Password, Role } =req.body
        let inputUser = {
            UserName,
            Password,
            Role
        }
        let result = await userDataGame.create(inputUser)
        console.log(result, "==> RESULT");
        if (result) {
            res.redirect("/login")
        }
    } catch (error) {
        console.log(error, "==>ERROR");
    }
})

module.exports = routes