
const express = require('express')
const router = express.Router()
const {
    leerUsuarios, 
    leerUsuarioId, 
    crearUsuario, 
    modificarUsuarioId, 
    borrarUsuarioId
} = require('../controladores/controladorUsuarios')



//peticion get a la ruta localhost:port/api/usuarios
//(envia un json con los usuarios de la base de datos)

//leer
router.get('/', leerUsuarios)
//leer por id
router.get('/:id', leerUsuarioId)

//Escribir
router.post('/', crearUsuario)

//Modificar
router.put('/:id', modificarUsuarioId)

//Borrar
router.delete('/:id', borrarUsuarioId)

module.exports = router