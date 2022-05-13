import React from 'react'
import '../hojas-de-estilos/Testimonios.css';

export default function Testimonio() {
  return (
    <div className='contenerdor-testimonio'>
      <img className='imagen-testimonio' 
        src={require('../images/aime.jpg')}
        alt='foto de Aime' />
        <div className='contenedor-texto-testimonio'>
          <p className='nombre-testimonio'>Aime Pachacama en Ecuador</p>
          <p className='cargo-testimonio'>Ingeniera Ambiental en Ecuador</p>
          <p className='texto-testimonio'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium, atque magnam? Expedita nam architecto totam placeat cupiditate ab ratione ut natus animi magni dolorem, saepe esse, voluptates doloremque culpa quos.</p>
        </div>
    </div>
  )
}
