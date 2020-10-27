import React from 'react'

import {LibrosContext} from '../context/LibrosProvider'
import PintarAutor from './PintarAutor'

const Libros = () => {

    const {libros} = React.useContext(LibrosContext)

    return (
        <div className="mt-5">
            <ul className='list-group'>
                {
                    libros.map(libro =>{
                        <li className="list-group-item" key={libros.id}>
                            <span>
                                {libros.titulo}
                            </span>
                            <span>
                                <PintarAutor referencia={libros.autor} id={libros.id}/>
                            </span>
                        </li>
                    })
                }
            </ul>
        </div>
    )
}

export default Libros
