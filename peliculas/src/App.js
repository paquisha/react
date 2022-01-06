import { useState } from 'react';
import "./App.css";
import Pelicula from "./Components/Pelicula";
import PageWrapper from "./Components/PageWrapper";
import PeliculasJson from './peliculas.json';
import Paginacion from "./Components/Paginacion";

function App() {

  const [paginaActual, setPaginaActual] = useState(1);

  let peliculas = PeliculasJson;

  peliculas = peliculas.slice((paginaActual - 1) * 3, paginaActual * 3);

  return (
    <PageWrapper>
      {peliculas.map((pelicula) => {
        return (
          <Pelicula
            titulo={pelicula.titulo}
            calificacion={pelicula.calificacion}
            director={pelicula.director}
            actores={pelicula.actores}
            fecha={pelicula.fecha}
            duracion={pelicula.duracion}
            img={pelicula.img}
          >
            {pelicula.descripcion}
          </Pelicula>
        );
      })}
      <Paginacion pagina={paginaActual} total={4} onChange={(pagina) => {
        setPaginaActual(pagina)
      }} />
    </PageWrapper>
  );
}

export default App;
