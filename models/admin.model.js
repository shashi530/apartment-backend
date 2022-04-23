
const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    password: {type: String, required: true}
},{
    timeStamps: true,
    versionKeys: false
});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;