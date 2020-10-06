import React from 'react';
import Saludo from './components/Saludo'
import Comentario from './components/Comentario';

function App() {
 return (
   <div className="container mt-5">
     <h1>Proyecto desde cero</h1>
     <Saludo persona='Ignacio' edad={30} />
     <Saludo persona='Juanito' edad={25} />
     <Saludo persona='Pedrito' edad={27} />
     <hr />
     <h3>Cajita de comentarios</h3>
     <Comentario
       urlImagen='https://picsum.photos/64'
       persona='Ignacio'
       texto='ffffffffffffffffffffffffffff'
     />
     <Comentario
       urlImagen='https://picsum.photos/64'
       persona='Juanito'
       texto='ddddddddddddddddddddddddddddd'
     />
     <Comentario
       urlImagen='https://picsum.photos/64'
       persona='Pedrito'
       texto='wwwwwwwwwwwwwwwwwwwwwwwwwwwwwww'
     />
   </div>
 );
}

export default App;