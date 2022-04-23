const mongoose = require("mongoose");
require('dotenv').config();


const connect = () => {
  return mongoose.connect("mongodb+srv://shashikant:shashikant530@apartmentsbackend.sxnqm.mongodb.net/myFirstDatabase?retryWrites=true&w=majority");
};

module.exports = connect;
