const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    }
});

const User = mongoose.model('stdUser', userSchema);

module.exports = User;
