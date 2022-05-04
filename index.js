
//librerias node
const express = require('express')
const mongoose = require('mongoose')
//morgan para mostrar info peticiones
const morgan = require('morgan')
//rutas
const partidas = require('./src/rutas/partidas')
const usuarios = require('./src/rutas/usuarios')

//conexion con base de datos
const db = require('./src/database.js')

//creamos objeto para servidor
const app = express()

//********** MIDDLEWARES ********** */

//Middleware par mostrar info de peticiones
app.use(morgan('combined'))
//Middleware para las rutas estáticas
app.use('/web', express.static(__dirname + '/src/public'))
//Middleware para la codificación json del cuerpo de las peticiones (body)
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Middleware para las rutas de la api
app.use('/api/partidas', partidas)
app.use('/api/usuarios', usuarios)


//ruta app.get
app.get('/', (req, res)=>{
    res.send('Estás en la raiz')
})


//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.error.bind(console, 'MongoDB conectado estupendamente...:'));


//Escuchamos en el puerto 3000
const PORT=3000
app.listen(PORT,()=>{
    console.log('estas escuchando en el puerto ', PORT);
})








