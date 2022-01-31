const mongoose = require("mongoose");
 superHeroSchema = new mongoose.Schema({
    name : {
        required: true,
        type: String,
    },
    gender : {
        required: true,
        type: String,
    },
    strenght : {
        required: true,
        type: Number ,
    },
    speed : {
        required: true,
        type: Number ,
    },
    intelligence : {
        required: true,
        type: Number ,
    },
 })
 module.exports = mongoose.model("superHero", superHeroSchema);