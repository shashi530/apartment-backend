

const mongoose = require('mongoose');

const residentSchema = new mongoose.Schema({
    name: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    flat_id: {type: mongoose.Schema.Types.ObjectId, ref: "Flat", required: true},
},{
    timeStamps: true,
    versionKeys: false
});

const Resident = mongoose.model("Resident", residentSchema);

module.exports = Resident;