const mongoose = require('mongoose')


const studentSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    roll: {
        type: String,
        required: true,

    }

})

module.exports = mongoose.model('student', studentSchema)