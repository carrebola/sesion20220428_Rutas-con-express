//Conexión con la base de datos

//Import the mongoose module
const mongoose = require('mongoose')

//Set up default mongoose connection
const mongoDB =
  'mongodb+srv://carlos_soc_fpllefia:fpllefia_soc_carlos@cluster0.w1e6t.mongodb.net/bd_pingpong?retryWrites=true&w=majority'

//Creamos conexión
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
const db = mongoose.connection

//exportamos la conexión
module.exports = db
