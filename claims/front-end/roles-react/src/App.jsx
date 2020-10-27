import React from 'react'
import AgregarLibros from './components/AgregarLibros'
import Libros from './components/Libros'
import Navbar from './components/Navbar'
import VistaAdmin from './components/VistaAdmin'

import {UsuarioContext} from './context/UsuarioProvider'

const App = () => {

  const {usuario} = React.useContext(UsuarioContext)

  return (
    <div>
      <Navbar />
      <div className="container">
        {
          usuario.rol === 'admin' && <VistaAdmin />
        }
        {
          usuario.rol === 'autor' && <AgregarLibros />
        }
        <Libros />
      </div>
    </div>
  )
}

export default App
