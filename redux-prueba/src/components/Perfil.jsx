import React from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { actualizarUsuarioAccion, editarFotoAccion } from '../redux/usuarioDucks'

const Perfil = () => {

    const usuario = useSelector(store => store.usuario.user)
    const loading = useSelector(store => store.usuario.loading)

    const [nombreUsuario, setNombreUsuario] = React.useState(usuario.displayName)
    const [activarFormulario, setActivarFormulario] = React.useState(false)

    const dispatch = useDispatch()

    const actualizarUsuario = () => {

        if(!nombreUsuario.trim()){
            console.log('Nombre vacio');
            return
        }
        dispatch(actualizarUsuarioAccion(nombreUsuario))
        setActivarFormulario(false)
    }

    const [error, setError] = React.useState(false)

    const seleccionarArchivo = imagen => {
        console.log(imagen.target.files[0]);
        const imagenCliente = imagen.target.files[0]

        if(imagenCliente === undefined){
            console.log('no se selecciono imagen');
        }

        if(imagenCliente.type === "imagen/png" || imagenCliente.type === "imagen/jpg"){
            dispatch(editarFotoAccion(imagenCliente))
            setError(false)
        }else{
            setError(true)
        }
    }

    return (
        <div className="mt-5 text-center">
            <div className="card">
                <div className="card-body">
                    <img src={usuario.photoURL} alt="" width="100px" className="img-fluid"/>
                    <h5 className="card-tittle">Nombre: {usuario.displayName}</h5>
                    <p className="card-text">Email: {usuario.email}</p>
                    <button className="btn btn-dark" onClick={() => setActivarFormulario(true)}>Editar Nombre</button>
                    {
                        error &&
                        <div className="alert alert-warning mt-2">
                            Solo Archivos png o jpg
                        </div>
                    }
                    <div class="custom-file">
                        <input type="file" 
                               className="custom-file-input" 
                               id="inputGroupFile01" 
                               aria-describedby="inputGroupFileAddon01" 
                               style={{display: 'none'}}
                               onChange={e => seleccionarArchivo(e)}
                               disabled={loading}/>
                        <label className={loading ? 'btn btn-success mt-2 disabled' : 'btn btn-success mt-2'} htmlFor="inputGroupFile01">Actualizar imagen</label>
                    </div>
                </div>

                {
                    loading &&
                    <div className="card-body">
                        <div className="d-flex justify-content-center">
                            <div className="spinner-border" role="status">
                                <span className="sr-only">Loading...</span>
                            </div>
                        </div>
                    </div>
                }
                {
                    activarFormulario &&
                    <div className="card-body">
                        <div className="row justify-content-center">
                            <div className="col-md-5">
                                <input type="text" className="form-control" placeholder="Usuario" value={nombreUsuario} onChange={e => setNombreUsuario(e.target.value)}/>
                            </div>
                            <div className="input-group-append">
                                <button className="btn btn-success" type="button" onClick={() => actualizarUsuario()}>Actualizar</button>
                            </div>
                        </div>
                    </div>
                }
            </div>                        
        </div>
    )
}

export default Perfil
