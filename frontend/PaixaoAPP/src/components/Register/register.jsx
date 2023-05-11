import { useState } from "react";

import { api } from "../../service";
import { useNavigate } from "react-router-dom";

export function RegisterComponent() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const navigate = useNavigate();

  async function handleRegister(event) {
    event.preventDefault();
    const registerData = {
      name,
      email,
      password,
      phone,
    };

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
    <div>
      <h2>Registre-se</h2>
      <form onSubmit={handleRegister}>
        <label htmlFor="name">Digite seu nome:</label>
        <input
          type="text"
          name="name"
          id="nameInput"
          value={name}
          required
          placeholder="Digite seu nome"
          onChange={(event) => setName(event.target.value)}
        />

        <label htmlFor="email">Digite seu Email:</label>
        <input
          type="text"
          name="email"
          id="emailInput"
          value={email}
          required
          placeholder="Digite seu email"
          onChange={(event) => setEmail(event.target.value)}
        />

        <label htmlFor="password">Digite sua senha :</label>
        <input
          type="password"
          name="password"
          id="passwordInput"
          value={password}
          required
          placeholder="Digite sua senha"
          onChange={(event) => setPassword(event.target.value)}
        />

        <label htmlFor="passwordconf">Confirme sua senha:</label>
        <input
          type="password"
          name="passwordconf"
          id="passwordconfInput"
          placeholder="Confirme sua senha"
        />

        <label htmlFor="phone">Digite seu celular:</label>
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
      </form>
    </div>
  );
}
