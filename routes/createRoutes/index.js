const { resolveInclude } = require("ejs")
const express = require("express")
const routes = express.Router()
const { userDataGame, userGameBiodata } = require("../../models")

routes.get("/", async (req, res) => {
    let resultData = await userDataGame.findOne({
        where: {id:12}
    })
    console.log(resultData.username);
    resultData.UserName = "jarno"
    resultData.Role = "admin"
    resultData.save()
    res.send("ini di update")
})





module.exports = routes