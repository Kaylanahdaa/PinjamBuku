const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    id : {
        type : String,
        required: true,
        unique: true
    },
    nama : {
        type: String,
        required: true,
    },
    email : {
        type : String,
        required: true,
        unique: true
    },
    hewan : {
        type: String,
        required: true
    },
    nama_hewan : {
        type : String,
        required: true,
        unique: true
    },
    kondisi : {
        type: String,
        required: true,
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;