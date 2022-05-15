import React from 'react'


export default function Primero() {

  const presion = (e) =>{
    e.preventDefault();
    const valor1 = parseInt(e.target.valor1.value, 10);
    const valor2 = parseInt(e.target.valor2.value, 10);
    const suma = valor1 + valor2;
    alert('La suma es: ' + suma);
  }

  return (
    <div>
      <h5>Primer Ejercicio</h5>
      <form onSubmit={presion}>
        <div className='mb-3'>
          <label className='form-label'>Ingrese primer numero</label>
          <input type='number' className='form-control' name='valor1' placeholder='Ingrese numero' />
        </div>
        <div className='mb-3'>
          <label className='form-label'>Ingrese segundo numero</label>
          <input type='number' className='form-control' name='valor2' placeholder='Ingrese numero' />
        </div>
        <div>
          <button type='submit' className='btn btn-success'>Calcular</button>
        </div>
      </form>
    </div>
  )
}