

const express = require("express");
const router = express.Router();

const Resident = require("../models/resident.model");

router.post("/", async(req, res) =>{
    try {
        const residents = await Resident.create(req.body);
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/", async(req, res) =>{
    try {
        const residents = await Resident.find().lean().exec();
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/:id", async(req, res) =>{
    try {
        const residents = await Resident.findById(req.params.id).lean().exec();
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.patch("/:id", async(req, res) =>{
    try {
        const residents = await Resident.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.delete("/:id", async(req, res) =>{
    try {
        const residents = await Resident.findByIdAndDelete(req.params.id);
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

// for residents length
router.get("/:flat_id/", async(req, res) =>{
    try {
        const residents = await Resident.find({flat_id: req.body.flat_id}).lean().exec();
        return res.status(200).send(residents);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
});


module.exports = router;