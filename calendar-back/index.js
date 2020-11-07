const express = require('express');
require('dotenv').config();

//crear servidor de express
const app = express();

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