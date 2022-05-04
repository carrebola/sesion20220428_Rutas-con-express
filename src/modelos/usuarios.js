const mongoose = require('mongoose')
//Creamos un esquema

//Define a schema
var Schema = mongoose.Schema

var EsquemaUsuario = new Schema({
  id: Number,
  nombre: String,
  apellidos: String,
  email: String,
})

//Crea el modelo
// Compile model from schema
var m_usuarios = mongoose.model('m_usuarios', EsquemaUsuario)

module.exports = m_usuarios
