import { useState } from 'react'
import './App.css';

function App() {

  const [formulario, setFormulario] =useState('');

  return (
    <div>
      <form>
        <input name="name" placeholder='Nombre' value={formulario.name} />

      </form>
    </div>
  )
}

export default App;
