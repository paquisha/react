import React from 'react'

import {useDispatch, useSelector} from 'react-redux'
import { obtenerPokemonesAccion, siguientePokemonAccion, anteriorPokemonAccion, unPokeDetalleAccion } from '../redux/pokeDucks'
import Detalle from './Detalle.jsx'

const Pokemones = () => {

    const dispatch = useDispatch()

    const pokemones = useSelector(store => store.pokemones.results)
    const next = useSelector(store => store.pokemones.next)
    const previous = useSelector(store => store.pokemones.previous)

    React.useEffect(() =>{
        const fetchData = () =>{
            dispatch(obtenerPokemonesAccion())
        }
        fetchData()
    },[dispatch])

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Listado de pokemones</h2>
                <br/>

                <div className="d-flex justify-content-between">
                    {
                        pokemones.length === 0 &&
                        <button className="btn btn-success" onClick={() => dispatch(obtenerPokemonesAccion())}>Get pokemones</button>
                    }
                    {
                        previous &&
                        <button className="btn btn-danger mx-2" onClick={() => dispatch(anteriorPokemonAccion())}>Anterior</button>
                    }
                    {
                        next &&
                        <button className="btn btn-warning mx-2" onClick={() => dispatch(siguientePokemonAccion())}>Siguiente</button>
                    }  
                </div>              
                
                <ul className="list-group mt-3">
                    {
                        pokemones.map(item => (
                            <li className="list-group-item" key={item.name}>{item.name}
                                <button className="btn btn-dark btn-sm float-right" onClick={() => dispatch(unPokeDetalleAccion(item.url))}>Info</button>
                            </li>
                        ))
                    }
                </ul>
            </div>
            <div className="col-md-6">
                <h2>Detalle Pokemones</h2>
                <Detalle />
            </div>
        </div>
    )
}

export default Pokemones
