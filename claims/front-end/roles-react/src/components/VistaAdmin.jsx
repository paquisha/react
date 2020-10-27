import React from 'react'
import {db, functions} from '../firebase'

const VistaAdmin = () => {

    const [usuarios, setUsuarios] = React.useState([])

    React.useEffect(() =>{
        fetchUsuarios()
    }, [])

    const fetchUsuarios = async() =>{
        try {
            const res = await db.collection('usuarios').get()
            const arrayUsuarios = res.docs.map(doc => doc.data())
            setUsuarios(arrayUsuarios)            
        } catch (error) {
            console.log(error);            
        }
    }

    const administrador = email =>{
        if(!email.trim()){
            return console.log('email vacio');
        }
        const agregarRol = functions.httpsCallable('agregarAdministrador')
        agregarRol({email: email})
            .then(res => {
                console.log(res);
                if(res.data.error){
                    return console.log('No tiene permisos');
                }
                db.collection('usuarios').doc(email).update({roll: 'admin'})
                    .then(user =>{
                        console.log('usuario modificado = rol administrador');
                        fetchUsuarios()
                    })
            })
    }

    const crearAutor = email =>{
        const agregarRol = functions.httpsCallable('crearAutor')
        agregarRol({emil: email})
            .then(res =>{
                console.log(res);
                if(res.data.error){
                    console.log('no tiene permisos');
                    return                    
                }
                db.collection('usuarios').doc(email).update({rol: 'autor'})
                    .then(user =>{
                        console.log('usuario modificado rol autor');
                        fetchUsuarios()
                    })
            })
    }

    const eliminarAutor = email =>{
        const agregarRol = functions.httpsCallable('eliminarAutor')
        agregarRol({email: email})
            .then(res =>{
                console.log(res);
                if(res.data.error){
                    console.log('no tiene los permisos necesarios');
                    return
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'})
                    .then(user =>{
                        console.log('usuarios lector modificado');
                        fetchUsuarios()
                    })
            })
    }

    const eliminarAdministrador = email =>{
        const agregarRol = functions.httpsCallable('eliminarAdministrador')
        agregarRol({email: email})
            .then(res =>{
                console.log(res);
                if(res.data.error){
                    console.log('no tiene los permisos necesarios');
                    return
                }
                db.collection('usuarios').doc(email).update({rol: 'invitado'})
                    .then(user =>{
                        console.log('usuarios admini modificado');
                        fetchUsuarios()
                    })
            })
    }

    return (
        <div>
            <h4>Administracion de usuarios</h4>
            {
                usuarios.map(usuario =>{
                    <div key={usuario.uid}>
                        uruarios: {usuario.email} - rol: {usuario.rol}
                        {
                            usuario.rol === 'admin' ? (
                                <button
                                    className="btn btn-warning mx-2"
                                    onClick={() => eliminarAdministrador(usuario.email)}
                                >
                                    elimnar admin
                                </button>
                            ) : (
                                <>
                                    <button
                                        className="btn btn-warning mx-2"
                                        onClick={() => administrador(usuario.email)}
                                    >
                                        administrador
                                    </button>
                                    <button
                                        className="btn btn-success mx-2"
                                        onClick={() => crearAutor(usuario.email)}
                                    >
                                        autor 
                                    </button>
                                    <button
                                        className="btn btn-success mx-2"
                                        onClick={() => eliminarAutor(usuario.email)}
                                    >
                                        Invitado 
                                    </button>
                                </>
                            )
                        }
                    </div>
                })
            }            
        </div>
    )
}

export default VistaAdmin
