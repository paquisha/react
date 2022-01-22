import { useState } from "react";
import useFormulario from "./hooks/useFormulario";
import Input from "./components/Input";
import Card from "./components/Card";
import Container from "./components/Container";
import Button from "./components/Button";
import "./App.css";

function App() {
  const [usuarios, setUsuarios] = useState([]);
  const [formulario, handleChange, reset] = useFormulario({
    name: "",
    lastName: "",
    email: "",
  });

  const submit = (e) => {
    e.preventDefault();
    setUsuarios({
      ...usuarios,
      formulario,
    });
    reset();
  };

  //console.log(formulario, usuarios);

  return (
    <div style={{ marginTop: '15%'}} >
      <Container>
        <Card>
          <div style={{ padding: 20 }}>
            <form onSubmit={submit}>
              <Input
                label="Nombre"
                name="name"
                value={formulario.name}
                onChange={handleChange}
                placeholder='Nombre'
              />
              <Input
                label="Apellido"
                name="lastName"
                value={formulario.lastName}
                onChange={handleChange}
                placeholder='Apellido'
              />
              <Input
                label="Correo"
                name="email"
                value={formulario.email}
                onChange={handleChange}
                placeholder='email'
              />
              <Button>Enviar</Button>
            </form>
          </div>
        </Card>
        <Card>
          <ul>
            {usuarios.map((usuario) => {
              <li
                key={usuario.email}
              >{`${usuario.name} ${usuario.lastName} ${usuario.email}`}</li>;
            })}
          </ul>
        </Card>
      </Container>
    </div>
  );
}

export default App;
