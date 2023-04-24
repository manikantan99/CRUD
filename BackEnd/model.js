const mongoose = require('mongoose');
var Schema = mongoose.Schema;
const dataSchema = new Schema({
    // _id: mongoose.Schema.Types.ObjectId,
    name: {
        required: true,
        type: String
    },
    email: {
        required: true,
        type: String
    },
    designation: {
        required: true,
        type: String
    },
    address: {
        required: true,
        type: String
    },
    phone_no:{
        required: true,
        type: String
    }
})

module.exports = mongoose.model('Complete-datas', dataSchema)