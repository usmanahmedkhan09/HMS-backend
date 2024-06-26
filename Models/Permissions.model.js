const mongoose = require('mongoose')
const { Schema } = mongoose

const permissionsSchema = new Schema({
    name: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Permission', permissionsSchema)