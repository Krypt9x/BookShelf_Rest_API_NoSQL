const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    author : {
        require : true,
        type : String
    },
    title : {
        require : true,
        type : String
    },
    genre : {
        require : true,
        type : String
    },
    readPage : {
        require : true,
        type : Number
    },
    pageCount : {
        require : true,
        type : Number
    },
    finished : {
        require : true,
        type : Boolean
    },
    createdAt : {
        require : true,
        type : String
    },
    updatedAt : {
        require : true,
        type : String
    }

});

module.exports = mongoose.model('Data', schema);