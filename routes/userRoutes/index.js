const { application } = require('express')
const express = require('express')
const routes = express.Router()
const { UserBio, UserData } = require("../../models")

routes.get("/:id", async (req, res) => {

    try {
        let id = req.params.id

        const dataBio = await UserBio.findOne({
            where: {
                UserDataId: id
            }
        })

        let bioList = dataBio.dataValues

        res.render("userPage", { bioList, id })
        
    } catch (error) {
        console.log(error.message);
    }
    

})


// routes.get('/delete/:id', (req, res) => {
//     UserData.destroy({ where: { id: req.params.id }, returning: true }).then(
//       (_) => {
//         res.redirect('/home');
//       }
//     );
//   });



module.exports = routes
