const express = require("express");
require("dotenv").config()
const app = express()
app.use(express.json())
var api = require("./routes");
app.use("/api", api);
let port = 8000
app.listen(port,() => {
    console.log("listen to port :",port)
})
