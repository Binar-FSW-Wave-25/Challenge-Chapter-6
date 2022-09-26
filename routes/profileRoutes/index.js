const express = require("express")
const routes = express.Router()
const { userGameBiodata } = require("../../models")

routes.get("/:id", (req, res) => {
    let id = req.params.id
    res.render("profilePage", { id })
})

routes.post("/:id", async (req, res) => {
    try {
        let {FirstName, LastName, Email, UserName, Country,} = req.body
        let id = req.params.id
        console.log(id, "==> Ini id");
        let inputuserGameBiodata = {
            FirstName,
            LastName,
            Email,
            UserName,
            Country,
            UserDataId: +id
        }
        let result = await userGameBiodata.create(inputuserGameBiodata)
        if (result) {
            res.redirect("/game")
            console.log(result);
        }
    } catch (error) {
        console.log(error);
    }
})

module.exports = routes