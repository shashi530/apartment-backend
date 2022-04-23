
const mongoose = require('mongoose');

const flatSchema = new mongoose.Schema({
    flat_name: {type: String, required: true},
    flat_img: {type: String, required: true},
    resident_type: {type: String, required: true},
    total_residents: {type: Number, required: false, default: 0},
    flat_no: {type: Number, required: true},
    block_name: {type: String, required: true},
},{
    timeStamps: true,
    versionKeys: false
});

const Flat = mongoose.model("Flat", flatSchema);

module.exports = Flat;