import { useState } from "react";
import { Link } from "react-router-dom";
import { api } from "../../service";
import { useNavigate } from "react-router-dom";
import {
  RegisterPage,
  TittleRegister,
  RegisterForm,
  RegisterInputs,
  Boximagem,
} from "./styledRegister";
import imagem from "../../assets/—Pngtree—line drawing hand drawn fingers_5524446.png";

export function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordconf, setPasswordconf] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    const registerData = {
      name,
      email,
      password,
      passwordconf,
      phone,
    };
    console.log(registerData);
    try {
      await api.post("/adm/createuser", registerData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <RegisterPage>
      <Boximagem>
        <img src={imagem} alt="" />
      </Boximagem>
      <RegisterInputs>
        <TittleRegister>Registre-se</TittleRegister>
        <h3>Faça seu cadastro para ter acesso a nossa agenda !</h3>
        <RegisterForm onSubmit={handleRegister}>
          <input
            type="text"
            name="name"
            id="nameInput"
            value={name}
            required
            placeholder="Digite seu nome"
            onChange={(event) => setName(event.target.value)}
          />

          <input
            type="text"
            name="email"
            id="emailInput"
            value={email}
            required
            placeholder="Digite seu email"
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

          <input
            type="password"
            name="passwordconf"
            id="passwordconfInput"
            required
            value={passwordconf}
            placeholder="Confirme sua senha"
            onChange={(event) => setPasswordconf(event.target.value)}
          />

          <input
            type="text"
            name="phone"
            id="phoneInput"
            required
            value={phone}
            placeholder="Digite seu celular"
            onChange={(event) => setPhone(event.target.value)}
          />

          <button>enviar</button>
        </RegisterForm>
        <h4>
          Para voltar clique <Link to="/">aqui</Link>
        </h4>
      </RegisterInputs>
    </RegisterPage>
  );
}
