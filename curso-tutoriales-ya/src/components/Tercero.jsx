import React, { useState } from 'react'

export default function Tercero() {

  const [articulos, setArticulos] = useState([
    {
        codigo: 1, 
        descripcion: 'papas',
        precio: 12.52
    },
    {
        codigo: 2, 
        descripcion: 'naranjas',
        precio: 21
    },
    {
        codigo: 3, 
        descripcion: 'peras',
        precio: 18.20
    }
  ]);

  const eliminarUltimaFila = () =>{
    if(articulos.length > 0){
      const temporales = Array.from(articulos);
      temporales.pop();
      setArticulos(temporales);
    }
  }

  return (
    <div>
      <h5>Tercer Ejercicio</h5>
      <table className='table'>
        <thead>
          <tr>
            <th>C&oacute;digo</th>
            <th>Descripci&oacute;n</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(articulo => {
            return(
              <tr key={articulo.codigo}>
                <td >{articulo.codigo}</td>
                <td >{articulo.descripcion}</td>
                <td >{articulo.precio}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <button className='btn btn-danger' onClick={eliminarUltimaFila}>Eliminar &uacute;ltima fila</button>
      </div>
    </div>
  )
}
