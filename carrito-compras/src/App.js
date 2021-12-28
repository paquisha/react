import { Component } from 'react/cjs/react.production.min';
import Productos from './components/Productos'

class App extends Component{
  state = {
    productos: [
      { name: 'tomate', price: 0.50, img: '/productos/tomate.jpg' },
      { name: 'lechuga', price: 0.75, img: '/productos/lechuga.jpg' },
      { name: 'berengena', price: 1.50, img: '/productos/berengena.jpg' },
      { name: 'pepino', price: 1.50, img: '/productos/pepino.jpg' },
      { name: 'papaya', price: 2.50, img: '/productos/papaya.jpg' },
      { name: 'arbejas', price: 1, img: '/productos/arbejas.jpg' }
    ]
  }

  render(){
    return (
      <div>
        <Productos
        agregarAlCarro={() => console.log('pasar al carro')}
        productos={this.state.productos}
        />
      </div>
    );
  }
}

export default App;
