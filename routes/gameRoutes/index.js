const express = require('express')
const routes = express.Router()
const { UserBio } = require("../../models")

routes.get("/:id", async (req, res) => {
    try {
        let id = req.params.id

        const dataBio = await UserBio.findOne({
            where: {
                UserDataId: id
            }
        })

        let bioList = dataBio.dataValues

        res.render("gamePage", { bioList, id })
        
    } catch (error) {
        console.log(error.message);
    }
})

module.exports = routes