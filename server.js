const express = require("express");
require("dotenv").config()
const app = express()
app.use(express.json())
app.get('/', function(req, res){
    res.send('Hello World');
});
let port = 8000
app.listen(port,() => {
    console.log("listen to port :",port)
})
