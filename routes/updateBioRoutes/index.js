const { application } = require('express')
const express = require('express')
const routes = express.Router()
const { UserBio } = require("../../models")

routes.get("/:id", (req, res) => {
    let id = req.params.id
    res.render("updateBioPage", { id })
})

routes.post("/:id", async (req, res) => {
    const id = req.params.id

    await UserBio.update(req.body, {
        where: { UserDataId: +req.params.id}
    })
    res.redirect(`/user/${ id }`)
})

module.exports = routes
