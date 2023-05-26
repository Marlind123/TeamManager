const mongoose = require('mongoose');

const newSoccer=new mongoose.Schema({
    PlayerName:{
        type:String,
        required:true,
        minlength:[3,"Name must be at least 3 characters"]
},
    Position:{
        type:String,
    },
    GameOne:{
        type:String,
        enum:["Playing","Not playing","Undecided"],
        default:"Undecided",

    },
    GameTwo:{
        type:String,
        enum:["Playing","Not playing","Undecided"],
        default:"Undecided"


    },
    GameThree:{
        type:String,
        enum:["Playing","Not playing","Undecided"],
        default:"Undecided",
    }
},{timespan:true})

const Soccer=mongoose.model('Soccer', newSoccer);

module.exports = Soccer