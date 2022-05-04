
// *********  Dependencias ************
//EXPRESS para levantar un servidor y crear rutas
const express = require('express')
//MONGOOSE para gestionar base de datos MongoDB
const mongoose = require('mongoose')
//MORGAN para mostrar info de las peticiones en consola
const morgan = require('morgan')

// ********** Módulos propios **********
//Rutas
const partidas = require('./src/rutas/partidas')
const usuarios = require('./src/rutas/usuarios')

//conexion con base de datos
const db = require('./src/database.js')

// ************* Servidor ***************

//creamos objeto para servidor
const app = express()

//************* MIDDLEWARES ************* 

//Middleware par mostrar info de peticiones
app.use(morgan('combined'))

//Middleware para la ruta /info. (Aquí publicaremos info de la api)
app.use('/info', express.static(__dirname + '/src/public'))

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


//Conexión con la base de datos mongoDB
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('connected', console.error.bind(console, 'MongoDB conectado estupendamente...:'));


//Levantamos servidor en el puerto 3000
const PORT=3000
app.listen(PORT,()=>{
    console.log('estas escuchando en el puerto ', PORT);
})








