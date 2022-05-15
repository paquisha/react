import './App.css';
import Primero from './components/Primero';
import Segundo from './components/Segundo';
import Tercero from './components/Tercero';
import FormularioNumeros from './components/FormularioNumeros';
import ListadoResultados from './components/ListadoResultados';
import { useState } from 'react';
import CoordenadaFlecha from './components/CoordenadaFlecha';

function App() {

  const [operaciones, setOperacion] = useState([]);
  const [visible, setVisible] = useState(true);

  function sumar(event) {
    event.preventDefault();
    const v1 = parseInt(event.target.valor1.value, 10)
    const v2 = parseInt(event.target.valor2.value, 10)
    const suma = v1 + v2
    const nuevo = {
      resultado: suma,
      valor1: v1,
      valor2: v2
    }
    setOperacion([nuevo, ...operaciones])
    event.target.valor1.value = ''
    event.target.valor2.value = ''  
  }

  const ocultar = () => {
    setVisible(false);
  }

  return (
    <div className="App">
      <div className='row'>
        <div className='col-md-6'>
          <Primero />
        </div>
        <div className='col-md-6'>
          <Segundo />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-12'>
          <Tercero />
        </div>
      </div>
      <div className='row mt-3'>
        <div className='col-md-6'>
          <FormularioNumeros onSumar={sumar} />
          <ListadoResultados resultados={operaciones} />
        </div>
        <div className='col-md-6'>
          {visible ? <CoordenadaFlecha /> : <p>se oculto la coordenada</p>}
          <button className='btn btn-primary' onClick={ocultar}>Ocultar</button>
        </div>
      </div>
    </div>
  );
}

export default App;
