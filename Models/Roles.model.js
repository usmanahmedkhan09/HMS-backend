const mongoose = require('mongoose')
const { Schema } = mongoose


const roleSchema = new Schema({
    name: {
        type: String
    },
    permissions: [{ type: Schema.Types.ObjectId, ref: 'Permission', require: true }],
})

module.exports = mongoose.model('Role', roleSchema)