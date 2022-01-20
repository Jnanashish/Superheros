const mongoose = require("mongoose")

const HeroSchema = new mongoose.Schema({
    superHero : {
        type : String,
        require : [true, "Please Name the hero"],
        unique : true,
        trim : true
    }, 
    realName : {
        type : String, 
        required : true,
        maxlength : [200, "Please keep real name short"]
    }
})

// if model is already crated it will return its data
module.exports = mongoose.model.Hero || mongoose.model("Hero", HeroSchema)