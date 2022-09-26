const express = require("express")
const app = express()
const port = 3000
const { userData, biodataUser} = require("./models")

app.set('views', './views')
app.use(express.static(__dirname + '/views'))
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use("/style", express.static("style"))
app.use("/assets", express.static("assets"))

app.set('view engine', 'ejs')

app.get("/home", (req, res) =>{
    res.render("home")
})

app.get("/register", (req, res) =>{
    res.render("registerPage")
})

app.post("/register", async (req, res) =>{
    // console.log(req.body);
    try {
        let { username, password, role } = req.body
        let inputUser = {
            username,
            password,
            role
        }
        // console.log(inputUser);
        let result = await userData.create(inputUser)
        if (result) {
            res.redirect("/login")
        }
    } catch (error) {
        console.log(error, "ini error sayang");
    }
})

app.get("/login", (req, res) =>{
    res.render("loginPage")
})

app.post("/login", async (req,res) =>{
    try {
        let { username, password, role } = req.body
        let flaging = false

        let resultData = await userData.findAll()

    for (let index = 0; index < resultData.length; index++) {
        // const element = array[index];
        let data = resultData[index].dataValues
        if (data.username === username && data.password === password && data.role === role) {
            flaging = true
            resultId = data.id
            break
        }else {
            flaging = false
            // break
        }
        console.log(resultData);
    }
    if (flaging) {
        res.redirect(`/fillbio/${resultId}`)
    }else {
        res.redirect("/login")
    }
} catch (error) {
    console.log(error, 'masih ada yang error sayang');
}
})

app.get("/fillbio/:id", (req, res) =>{
    let id = req.params.id
    res.render("fillBiodata",{ id })
})

app.post("/fillbio/:id", async (req, res) =>{
    console.log(req.body);
    try {
        // console.log(req.body, '->data user');
        // console.log(req.params);
        let { fullname, gender, birthdate, address, age, phone} = req.body
        let id = req.params.id
        // console.log(id, '->ini id');
        let inputBiodataUser = {
            fullname,
            gender,
            birthdate,
            address,
            age,
            phone,
            idDataUser : +id
        }
        // console.log(inputBiodataUser, '->input user');
        let result = await biodataUser.create(inputBiodataUser)
        
        if (result) {
            // console.log(result);
            res.redirect(`/game/${id}`)
        }

    } catch (error) {
        console.log(error, 'error sayang, coba cek dlu');
    }
})

app.get("/game/:id", (req, res) =>{
    let id = req.params.id
    res.render("game", { id })
})


app.listen(port, () =>{
    console.log("servernya jalan kok sayang, aman");
})