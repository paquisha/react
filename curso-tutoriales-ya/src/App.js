import './App.css';
import Primero from './components/Primero';
import Segundo from './components/Segundo';
import Tercero from './components/Tercero';

function App() {
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
    </div>
  );
}

export default App;
