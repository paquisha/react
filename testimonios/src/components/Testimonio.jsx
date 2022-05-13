import React from 'react'
import '../hojas-de-estilos/Testimonios.css';

export default function Testimonio(props) {
  return (
    <div className='contenerdor-testimonio'>
      <img className='imagen-testimonio' 
        src={require(`../images/${props.imagen}.jpg`)}
        alt='foto de Aime' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>
            <b>{props.nombre}</b> en {props.pais}
            </p>
          <p className='cargo-testimonio'>{props.cargo} en <b>{props.empresa}</b></p>
          <p className='texto-testimonio'>{props.testimonio}</p>
        </div>
    </div>
  )
}
