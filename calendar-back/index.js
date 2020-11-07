const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

//crear servidor de express
const app = express();

//mongo
dbConnection();

//directorio publico
app.use( express.static('public') );

//Lectura y parseo de body
app.use( express.json() );

//rutas
//TODO: auth // crear, login, renew
app.use('/api/auth', require('./routes/auth') );
//TODO: crud: eventos



//escuchar peticiones
app.listen( 4000, () =>{
    console.log(`servidor corriendo ${4000}`);
});