//importamos el modelo
const m_usuarios = require('../modelos/usuarios')

module.exports = {
  leerUsuarios: async (req, res) => {
    // Busca todos los usuarios
    try {
      const usuariosEncontrados = await m_usuarios.find()
      res.json({
        error: null,
        data: usuariosEncontrados,
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  leerUsuarioId: async (req, res) => {
    const id = req.params.id
    try {
      const usuarioEncontrado = await m_usuarios.findById(id)
      res.json({
        error: null,
        data: usuarioEncontrado,
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  crearUsuario: async (req, res) => {
    // // ****************    Crear usuario **********************
    // Creamos el objeto usando el model que creaos anteriormente
    const usuario = new m_usuarios({
      id: req.body.id,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      email: req.body.email,
    })
    // Usamos .save() del model para almacenar los datos en Mongo
    try {
      const usuarioGuardado = await usuario.save()
      res.json({
        error: null,
        data: usuarioGuardado,
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  modificarUsuarioId: async (req, res) => {
    // // ****************    Modificar usuario **********************
    // Creamos el objeto usando el model que creaos anteriormente
    const id = req.params.id
    const usuario = {
      id: req.body.id,
      nombre: req.body.nombre,
      apellidos: req.body.apellidos,
      email: req.body.email,
    }
    try {
      const usuarioModificado = await m_usuarios.findOneAndUpdate(
        { _id: id },
        usuario
      )
      res.json({
        error: null,
        data: usuarioModificado,
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
  borrarUsuarioId: async (req, res) => {
    // // ****************    Modificar usuario **********************

    const id = req.params.id

    try {
      const borrado = await m_usuarios.deleteOne({ _id: id })
      res.json({
        error: null,
        data: 'Usuario ' + id + ' borrado',
      })
    } catch (error) {
      res.status(400).json({ error })
    }
  },
}
