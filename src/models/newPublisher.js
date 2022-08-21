const mongoose = require('mongoose');
const authorSchema = new mongoose.Schema({


name: String,
headQuarter: String,

},{ timestamps: true })

module.exports = mongoose.model('publisher', authorSchema)

