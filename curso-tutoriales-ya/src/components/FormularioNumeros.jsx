import React from 'react'

export default function FormularioNumeros(props) {
  return (
    <form onSubmit={props.onSumar}>
    <div className='mb-3'>
      <label className='form-label'>Ingrese primer numero</label>
      <input type='number' className='form-control' name='valor1' placeholder='Ingrese numero' />
    </div>
    <div className='mb-3'>
      <label className='form-label'>Ingrese segundo numero</label>
      <input type='number' className='form-control' name='valor2' placeholder='Ingrese numero' />
    </div>
    <div>
      <button type='submit' value='Sumar' className='btn btn-success'>Sumar</button>
    </div>
  </form>
  )
}
