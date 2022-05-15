import './App.css';

function App() {
    const presion = (e) =>{
        e.preventDefault();
        const valor1 = parseInt(e.target.valor1.value, 10);
        const valor2 = parseInt(e.target.valor2.value, 10);
        const suma = valor1 + valor2;
        alert('La suma es: ' + suma);
    }
  return (
    <div className="App">
      <form onSubmit={presion}>
        <p> Ingrese valor:
         <input type="number" name="valor1" />
        </p>
        <p>Ingrese segundo valor:
         <input type="number" name="valor2" />
        </p>
        <p>
         <input type="submit" value="Sumar" />
        </p>
      </form>
    </div>
  );
}

export default App;
