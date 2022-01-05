import { useState } from 'react'
import "./App.css";
   
import html2canvas from 'html2canvas';

function App() {

  const [lineaUno, setLineaUno] = useState('');

  const [lineaDos, setLineaDos] = useState('');

  const [imagen, setImagen] = useState('');

  const onChangeLineaUno = function(valor){
    console.log(valor.target.value);
    setLineaUno(valor.target.value);
  }

  const onChangeLineaDos = function(valor){
    setLineaDos(valor.target.value);
  }

  const onChangeImage = function(valor){
    setImagen(valor.target.value);
  }

  const onClickExportar = function (evento) {

    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <div className="container pt-5">
        <select onChange={onChangeImage} className="form-select">
          <option value="homero">Homero</option>
          <option value="kirby">kirby</option>
          <option value="linux">Linux</option>
          <option value="morocha">Morocha</option>
          <option value="skinner">skiner</option>
          <option value="malcon">malcom</option>
          <option value="spiderMan">spider man</option>
        </select>
        <div className="row pt-5">
          <input onChange={onChangeLineaUno} className="form-control" type="text" placeholder="Linea superior..."/>
        </div>
        <div className="row pt-5">
          <input onChange={onChangeLineaDos} className="form-control" type="text" placeholder="Linea inferior..." />
        </div>
        <div className="row pt-5">
          <button onClick={onClickExportar} type="button" className="btn btn-success" >Exportar</button>
        </div>
        <div className="row pt-5 meme" id="meme">
          <span>{lineaUno}</span>
          <br />
          <span>{lineaDos}</span>
          <img src={"/img/"+ imagen +".png"} />
        </div>
      </div>
    </div>
  );
}

export default App;
