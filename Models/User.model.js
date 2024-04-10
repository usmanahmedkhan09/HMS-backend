const mongoose = require('mongoose');
const { Schema } = mongoose

const userSchema = new Schema({
    first_name: {
        type: String,
        require: true
    },
    last_name: {
        type: String,
        require: true
    },
    mobile_no: {
        type: Number,
        require: true
    },
    email: {
        type: String,
        require: true
    },
    password: { type: String, required: true },
    role: { type: Schema.Types.ObjectId, ref: 'Role', require: true },
})

module.exports = mongoose.model('User', userSchema)