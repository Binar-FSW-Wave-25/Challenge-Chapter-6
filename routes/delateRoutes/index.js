const express = require("express")
const routes = express.Router()
const { userGameBiodata } = require("../../models")

routes.get("/", async(req, res) => {
    let resultData = await userGameBiodata.findAll()
    // console.log(resultData);
    for (let i = 0; i < resultData.length; i++) {
        const element = resultData[i];
        console.log(element.dataValues.id);
        
    }
    // let userGameBiodata = [
    //     dataValues = [
    //         FirstName,
    //         LastName,
    //         Email,
    //         UserName,
    //         Country
    //     ]
    // ]
    res.send("masukk")
})

module.exports = routes