const MiComponente = ({ miProp }) =>{
  return(
    <div>
      nombre: {miProp}
    </div>
  )
}

const App = () =>{
  return(
    <MiComponente miProp={'string feliz'}/>
  )  
}


  
export default App;
