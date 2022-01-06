import { useState, useEffect } from 'react';
import './App.css';
import PageWrapper from './Components/PageWrapper';
import Paginacion from './Components/Paginacion';
import Pelicula from './Components/Pelicula';
import peliculasJson from './peliculas.json';

function App() {

  const [paginaActual, setPaginaActual] = useState(1);
  const [peliculas, setPeliculs] = useState([]);

  useEffect(() => {
    buscarPeliculas();
  }, [])

  const TOTAL_POR_PAGINA = 7;

  let peliculs = peliculasJson;

  const buscarPeliculas = async () => {
    let url = 'https://lucasmoy.dev/data/react/peliculas.json';

    let resultado = await fetch(url, {
      "method": "GET",
      "mode": 'no-cors',
      "headers": {
        "Accept": 'application/json',
        "Content-Type": 'application/json'
      }
    });
    let json = await resultado.json();
    setPeliculs(json);
    console.log(json);
  }

  const getTotalPaginas = () => {
    let cantidadTotalDePeliculas = peliculasJson.length;
    return Math.ceil(cantidadTotalDePeliculas / TOTAL_POR_PAGINA);
  }

  let peliculasPorPagina = peliculas.slice(
    (paginaActual - 1) * TOTAL_POR_PAGINA,
    paginaActual * TOTAL_POR_PAGINA
  );

  return (
    <PageWrapper>
      {peliculasPorPagina.map(pelicula =>
        <Pelicula titulo={pelicula.titulo} calificacion={pelicula.calificacion}
          director={pelicula.director} actores={pelicula.actores} fecha={pelicula.fecha} duracion={pelicula.duracion}
          img={pelicula.img}>
          {pelicula.descripcion}
        </Pelicula>
      )}

      <Paginacion pagina={paginaActual} total={getTotalPaginas()} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />

    </PageWrapper>
  );
}

export default App;
