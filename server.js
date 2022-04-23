
const express = require("express");
const app = express();
var cors = require('cors')
require('dotenv').config();
const port = process.env.PORT || 2600;

const connect = require("./config/connect");

const adminController = require("./controllers/admin.controller.js")
const flatsController = require("./controllers/flats.controller.js")
const residentsController = require("./controllers/residents.controller.js")

app.use(cors())
app.use(express.json());

app.use("/admin/", adminController)
app.use("/flats/", flatsController)
app.use("/residents/", residentsController)

app.listen(port, async(req, res) => {
    try{
        await connect();
        console.log("app is listening", port);
    }catch(err){
        console.log("Error ", err.message);
    }
});





