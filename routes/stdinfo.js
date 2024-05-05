const mongoose = require("mongoose")
mongoose.connect("mongodb://127.0.0.1:27017/newdb");


const stdinfo = mongoose.Schema({
    username: String,
    stdFather: String,
    stdContact:Number
})

module.exports = mongoose.model("stdinfo", stdinfo)
