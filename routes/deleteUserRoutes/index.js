const { application } = require('express')
const express = require('express')
const routes = express.Router()
const { UserBio, UserData } = require("../../models")

routes.get("/:id", (req, res) => {
    let id = req.params.id
    console.log(id, "===> ID LINE 8");
    res.render("deleteUser", { id })
})
routes.get("/thisuser/:id", async (req, res) => {
    const id = req.params.id
    console.log(id, "===> ID LINE 13");
    await UserData.destroy({
        where: { 
            id:req.params.id
        }
        })
    await UserBio.destroy({
        where: { 
            UserDataId: +req.params.id
        }
        })

        res.redirect("/home")
    })

module.exports = routes