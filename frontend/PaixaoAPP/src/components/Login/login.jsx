import { useState } from "react";
import { api } from "../../service";
import { Link,useNavigate } from "react-router-dom";
import { AdmDashcomp } from "../AdmDash/admDash";
import {
  LogoLogin,
  LoginPage,
  LoginInputs,
  LoginForm,
  TittleLogin,
  Boximagem,
} from "./styledLogin";

import imagem from "../../assets/—Pngtree—line drawing hand drawn fingers_5524446.png";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(event) {
    event.preventDefault();
    const schema = {
      email,
      password,
    };
  
    try {
      const response = await api.post("/employee/login", schema);
      
       navigate("/admDashboard", {response})
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <LoginPage>
      <Boximagem>
        <img src={imagem} alt="" />
      </Boximagem>
      <LoginInputs>
        <LogoLogin>Paixao por Esmaltes</LogoLogin>
        <TittleLogin>Realize seu login na plataforma!</TittleLogin>
        <LoginForm onSubmit={handleLogin}>
          <input
            type="text"
            name="user"
            id="userInput"
            placeholder="Digite seu login"
            value={email}
            required
            onChange={(event) => setEmail(event.target.value)}
          />

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
        </LoginForm>
        <div>
          <h4>
            Para se registrar clique <Link to="/register">aqui</Link>
          </h4>
        </div>
      </LoginInputs>
    </LoginPage>
  );
}
