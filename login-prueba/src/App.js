import { useState } from 'react';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //como se ve normalmente
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  //usando destructuring
  const handlePasswordChange = ({ target: { value }}) => {
    setPassword(value);
  }

  //formulario
  const handleFormSubmit = (event) => {
    event.preventDefault();
    alert(`Usuario: ${email}, Password: ${password}`);
  }


  return (
    <div className="App">
      <form onSubmit={handleFormSubmit}>
        <h2>iniciar sesion</h2>
        <label>
          Correo
          <input type="email" value={email} onChange={handleEmailChange}/>
        </label>
        <label>
          password
          <input type="password" value={password} onChange={handlePasswordChange}/>
        </label>
        <button type='submit'>
          Enter
        </button>
      </form>
    </div>
  );
}

export default App;
