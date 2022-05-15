import { useState, useEffect } from 'react'

export default function EjercicioApi() {

  const [articulos, setArticulos] = useState([]);
  const [recuperado, setRecuperado] = useState(false);

  useEffect(() =>{
    fetch('http://scratchya.com.ar/react/datos.php')
      .then((response) => {
        return response.json();
      })
      .then((articulos) => {
        setTimeout(() => {
          setArticulos(articulos)
          setRecuperado(true)
        }, 2000)
      })
  }, [])

  if(recuperado){
    return mostrarTabla()
  }else{
    return(
      <div>Recuperando datos...</div>
    );
  }

  function mostrarTabla(){
    return (
      <div>
        <h5>Quinto ejercicio</h5>
        <table className='table'>
          <thead>
            <tr>
              <th>C&oacute;digo</th>
              <th>Descripci&oacute;</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
            {articulos.map(articulo =>{
              return(
                <tr key={articulo.codigo}>
                  <td>{articulo.codigo}</td>
                  <td>{articulo.descripcion}</td>
                  <td>{articulo.precio}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    )
  }
}
