const express = require('express')
const routes = express.Router()
const { UserData } = require("../../models")

routes.get("/", (req, res) => {
    res.render("loginPage")
})

routes.post("/", async (req, res) => {
    try {
        let { username, password, role } = req.body
        let pass = false
        let usedId

        let userList = await UserData.findAll()
        for (let index = 0; index < userList.length; index++) {
            const data = userList[index].dataValues;

            if (data.username === username && data.password === password && data.role === role) {
                pass = true
                usedId = data.id
                break
            } else {
                pass = false
            }
        }

        if (pass) {
            res.redirect(`/addbiodata/${usedId}`)
        } else {
            res.redirect("/login")
        }
    } catch (error) {
        console.log("ERROR");
    }
})

module.exports = routes