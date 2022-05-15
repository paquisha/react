import { React, useState } from 'react'

export default function Segundo() {
  
  const [numeros, setNumeros] = useState([0, 0, 0, 0, 0]);

  const generarAleatorio = () =>{
    const vector = new Array(5);
    for(let i = 0; i < vector.length; i++){
      vector[i] = Math.trunc(Math.random() * 10);
      setNumeros(vector);
    }
  }

  return (
    <div>
      <h5>Segundo Ejercicio</h5>
      <div>
        <label>Numero aleatorio:</label>
        {numeros.map(numero => (<label>{numero},</label>))}
      </div>
      <div>
        <button className='btn btn-warning mt-2' onClick={generarAleatorio} >Generar Numero</button>
      </div>
    </div>
  )
}
