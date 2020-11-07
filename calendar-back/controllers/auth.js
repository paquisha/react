const { response } = require('express');
//crear usuario
const crearUsuario = (req, res = response) =>{

    const {name, email, password} = req.body;

    if(name.length < 5){
        return res.status(404).json({
            ok: false,
            msg: 'El nombre debe ser mayor de 5 letras'
        });
    }

    res.json({
        ok:true,
        msg: 'registro',
        name,
        email,
        password
    })
}
//loginUsuario
const loginUsuario = (req, res = response) =>{
    const {name, email, password} = req.body;
    res.json({
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