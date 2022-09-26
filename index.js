const express = require("express")
const app = express()
const port = 3000

/*app.get("/", (req, res) =>{
    res.send("MASUK PAK EKO")
})
*/

app.listen(port, () => {
    console.log("SERVER NYALA DI PORT " + port);
})