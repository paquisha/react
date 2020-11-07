const { response } = require('express');
const Usuario = require('../models/Usuario')



//crear usuario
const crearUsuario = async(req, res = response) =>{
    const {email, password} = req.body;
    try {
        let usuario = await Usuario.findOne({ email });
        console.log(usuario);
        // const usuario = new Usuario( req.body);
        // await usuario.save();

        res.status(201).json({
            ok:true,
            msg: 'registro'
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Por favor hable con el administrador'
        });        
    }
}
//loginUsuario
const loginUsuario = (req, res = response) =>{
    const {email, password} = req.body;
    res.status(201).json({
        ok:true,
        msg: 'login',
        email,
        password
    })
}
//revalidarToken
const revalidarToken = (req, res) =>{
    res.json({
        ok:true,
        msg: 'renew'
    })
}

module.exports = {
    crearUsuario,
    loginUsuario,
    revalidarToken
}