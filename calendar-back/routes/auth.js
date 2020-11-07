/*
    Rutas de usuarios /auth
    host + /api/auth
*/
const { Router } = require('express');
const { check, validationResult } = require('express-validator');
const router = Router();
const { crearUsuario, loginUsuario, revalidarToken } = require('../controllers/auth');
const { validarCampos } = require('../middlewares/validar-campos');


router.post(
    '/new',
    [//middlewares
        check('name', 'El nombre es obligatorio').isEmpty(),
        check('email', 'El mail es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    crearUsuario);

router.post(
    '/',
    [//middlewares
        check('email', 'El mail es obligatorio').isEmail(),
        check('password', 'El password debe ser de 6 caracteres').isLength({ min: 6 }),
        validarCampos
    ],
    loginUsuario);

router.get(
    '/renew',
    [//middleware
        
    ],
    revalidarToken);

module.exports = router;