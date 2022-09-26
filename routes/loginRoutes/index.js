const express = require("express")
const routes = express.Router()
const { userDataGame } = require("../../models")

routes.get("/", (req, res) => {
    res.render("loginPage", { isFalse: false })
})

routes.post("/", async (req, res) => {
    console.log(req.body);
    try {
        let { UserName, Password, Role } = req.body
        console.log(UserName, Password, Role, "==> Input User");
        let flaging = false
        let resultId

        let resultData = await userDataGame.findAll()
        console.log(resultData);
        for (let index = 0; index < resultData.length; index++) {
            let data = resultData[index].dataValues
            if (data.UserName === UserName && data.Password === Password && data.Role === Role) {
                flaging = true
                resultId = data.id
                break
            }else {
                flaging = false
                // break
            }
            
        }

        if (flaging) {
            res.redirect(`/profile/${resultId}`)
            console.log(resultId, "==> id");
        }else {
            res.redirect("/error")
        }

    } catch (error) {
        console.log(error);
    }
})


module.exports = routes