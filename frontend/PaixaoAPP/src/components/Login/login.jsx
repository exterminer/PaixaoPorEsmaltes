import { useState } from "react";
import { api } from "../../service";
import { Link } from "react-router-dom";

export function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  function handleLogin(event) {
    event.preventDefault();
    const schema = {
      user,
      password,
    };

    console.log(schema);
    console.log(api)
  }

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label htmlFor="user">Login:</label>
        <input
          type="text"
          name="user"
          id="userInput"
          placeholder="Digite seu login"
          value={user}
          required
          onChange={(event) => setUser(event.target.value)}
        />
        <label htmlFor="passsword">Senha:</label>
        <input
          type="password"
          name="password"
          id="passwordInput"
          value={password}
          required
          placeholder="Digite sua senha"
          onChange={(event) => setPassword(event.target.value)}
        />
        <button>Enviar</button>
      </form>
      <div>
        <h4>Para se registrar clique aqui</h4>
        <Link to="/register">Cadastre-se</Link>
      </div>
    </div>
  );
}
