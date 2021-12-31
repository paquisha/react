import { Component } from 'react/cjs/react.production.min';
import Productos from './components/Productos'
import Layout from './components/Layout'
import Tittle from './components/Tittle'
import Nabvar from './components/Nabvar'

class App extends Component{
  state = {
    productos: [
      { name: 'tomate', price: 0.50, img: '/productos/tomate.jpg' },
      { name: 'lechuga', price: 0.75, img: '/productos/lechuga.jpg' },
      { name: 'berengena', price: 1.50, img: '/productos/berengena.jpg' },
      { name: 'pepino', price: 1.50, img: '/productos/pepino.jpg' },
      { name: 'papaya', price: 2.50, img: '/productos/papaya.jpg' },
      { name: 'arbejas', price: 1, img: '/productos/arbejas.jpg' }
    ],
    carro: [
      //{ name: 'tomate', price: 0.50, img: '/productos/tomate.jpg', cantidad: 1 },
    ],
    esCarroVisible: false
  }

  agregarAlCarro = (producto) => {
    const { carro } = this.state
    if(carro.find(x => x.name === producto.name)){
      const newCarro = carro.map(x => x.name === producto.name
        ? ({
          ...x,
          cantidad: x.cantidad + 1
        })
        : x)
        return this.setState({ carro: newCarro })
    }
    return this.setState({
      carro: this.state.carro.concat({
        ...producto,
        cantidad: 1,
      })
    })
  }

  mostrarCarro = () => {
    if(!this.state.carro.length){
      return
    }
    this.setState({ esCarroVisible: !this.state.esCarroVisible })
  }

  render(){
    //console.log(this.state.carro);
    const { esCarroVisible } = this.state
    return (
      <div>
        <Nabvar carro={this.state.carro} esCarroVisible={esCarroVisible} mostrarCarro={this.mostrarCarro}/>
        <Layout>
          <Tittle />
          <Productos
          agregarAlCarro={this.agregarAlCarro}
          productos={this.state.productos}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
