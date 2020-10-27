import React from 'react'
import { db } from '../firebase'
import {LibrosContext} from '../context/LibrosProvider'
import {UsuarioContext} from '../context/UsuarioProvider'

const PintarAutor = (props) => {

    const [autor, setAutor] = React.useState('')

    const {fecthLibros} = React.useContext(LibrosContext)
    const {usuario} = React.useContext(UsuarioContext)

    React.useEffect(() =>{
        fetchAutor()
    }, [])

    const eliminarLibro = async() =>{
        try {
            const res = await db.collection('libros').doc(props.id).delete()

        } catch (error) {
            console.log(error);
        }
    }

    const fetchAutor = async() =>{
        try {
            const res = await props.referencia.get()
            console.log(res);
            setAutor(res.data().email)            
        } catch (error) {
            console.log(error);
        }
    }
    return (
        <>
        <span> {autor} </span>
        {
            (autor === usuario.email || usuario.rol === 'admin') && (
                <button className="btn btn-danger float-rigth" onClick={eliminarLibro}>
                    Eliminar
                </button> 
            )
        }          
        </>
    )
}

export default PintarAutor
