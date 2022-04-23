

const express = require("express");
const router = express.Router();

const Flat = require("../models/flat.model");

router.post("/", async(req, res) =>{
    try {
        const flats = await Flat.create(req.body);
        return res.status(200).send(flats);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/", async(req, res) =>{
    try {
        const flats = await Flat.find().lean().exec();
        return res.status(200).send(flats);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.get("/:id", async(req, res) =>{
    try {
        const flats = await Flat.findById(req.params.id).lean().exec();
        return res.status(200).send(flats);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.patch("/:id", async(req, res) =>{
    try {
        const flats = await Flat.findByIdAndUpdate(req.params.id, req.body);
        return res.status(200).send(flats);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

router.delete("/:id", async(req, res) =>{
    try {
        const flats = await Flat.findByIdAndDelete(req.params.id);
        return res.status(200).send(flats);
    }
    catch(err){
        return res.status(500).send(err.message);
    }
})

module.exports = router;