const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Imagen = new Schema({
    nombre: {type: String, required: true},
    descripcion: {type: String, default: ''},
    ruta: String
});

module.exports = mongoose.model('Imagen', Imagen);