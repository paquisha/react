import React from 'react'

export default function ListadoResultados(props) {
  return (
    <div>
        <ul>
            {props.resultados.map((elemento) =>
                <li key={elemento}>La suma de {elemento.valor1} y {elemento.valor2} es: {elemento.resultado}</li>
            )}
        </ul>
    </div>
  )
}
