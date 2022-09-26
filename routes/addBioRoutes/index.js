const { application } = require('express')
const express = require('express')
const routes = express.Router()
const { UserBio } = require("../../models")

routes.get("/:id", (req, res) => {
    let id = req.params.id
    res.render("addBioPage", { id })
})

routes.post("/:id", async (req, res) => {
    try {
        let {fullname, city, age} = req.body
        let id = req.params.id
        let bioInput = {
            fullname,
            city,
            age,
            UserDataId: +id
        }
        let result = await UserBio.create(bioInput)


        if (result) {
            res.redirect(`/user/${id}`);
        }

    } catch (error) {
        console.log(error.message);
    }
})

module.exports = routes