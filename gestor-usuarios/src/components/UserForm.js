import Button from "./Button";
import Input from "./Input";
import useFormulario from "../hooks/useFormulario";

const UserForm = ({ submit }) =>{
    const [formulario, handleChange, reset] = useFormulario({
        name: "",
        lastName: "",
        email: "",
      });
      const handleSubmit = (e) =>{
          e.preventDefault()
          submit(formulario)
          reset()
      }
    return(
        <form onSubmit={handleSubmit}>
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
    )
}

export default UserForm;