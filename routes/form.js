const mongoose = require('mongoose');
mongoose.connect("mongodb://127.0.0.1:27017/newdb");


// Schema definition
const formDataSchema = new  mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    },

    // Add more fields as needed
});

// Model creation
module.exports  = mongoose.model('FormData', formDataSchema);


