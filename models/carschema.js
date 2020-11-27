const mongoose = require('mongoose')

const CarSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
},
    {
        timestamps: true
    }
)

global.CarSchema = global.CarSchema || mongoose.model('Car', CarSchema);
module.exports = global.CarSchema;