//Conexión con la base de datos

//Import the mongoose module
var mongoose = require('mongoose');

//Set up default mongoose connection
var mongoDB = 'mongodb+srv://carlos_soc_fpllefia:fpllefia_soc_carlos@cluster0.w1e6t.mongodb.net/bd_pingpong?retryWrites=true&w=majority';

//Creamos conexión
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});

//Get the default connection
var db = mongoose.connection;

//exportamos la conexión
module.exports = db





// // ****************    Crear usuario **********************
// // Create an instance of model SomeModel
// var usuario_instance = new usuarios(
//     {
//         id: 12,
//         nombre: 'Pepe',
//         apellidos: 'Potamo',
//         email: 'pepe@gmail.com'
//     }
// );

// // Save the new model instance, passing a callback
// usuario_instance.save(function (err) {
//   if (err) return handleError(err);
//   console.log('Usuario guardado');
// });

// // ****************    Leer usuarios **********************
// //var usuarios = mongoose.model('usuarios', EsquemaUsuario);

// // find all athletes who play tennis, selecting the 'name' and 'age' fields
// usuarios.find({ 'nombre': 'Pepe' }, 'nombre apellidos email', function (err, resultados) {
//   if (err) return handleError(err);
//   // 'resultados' contains the list of athletes that match the criteria.
//   console.log(resultados);
// })
