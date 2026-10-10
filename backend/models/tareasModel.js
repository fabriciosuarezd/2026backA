const mongoose = require('mongoose')

const tareasSchema = mongoose.Schema({
    descripcion: {
        type: String,
        required: [true, 'POr favor teclea una descripcion']
    }
},{
    timestamps: true
})

module.exports = mongoose.model('Tarea', tareasSchema)