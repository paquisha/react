import { useState, useEffect } from 'react'

export default function CoordenadaFlecha() {

  const [posicion, setPosicion] = useState({ x: 0, y:0 });
  useEffect(() => {
    window.addEventListener('mousemove', fijarPosicion);
    return () => {
      window.removeEventListener('mousemove', fijarPosicion);
      console.log('se borro el registro de eventos');
    }
  }, []);

  function fijarPosicion(e){
    setPosicion({ x: e.clientX, y: e.clientY }); 
  }

  return (
    <div>
      <h5>Cuarto Ejercicio</h5>
      <p>{posicion.x} - {posicion.y}</p>
    </div>
  )
}
