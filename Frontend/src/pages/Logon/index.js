import React from "react";
import "./styles.css";
import heroesImg from "../../assets/heroes.png"
import logoImg from "../../assets/logo.svg";
import {FiLogIn} from "react-icons/fi"

export default function Logon() {
  return (
    <div className="logon-container">
      <section className="form">
        <img src={logoImg} alt="logo" />
        <form>
          <h1>Faça seu logon</h1>
          <input placeholder="Sua ID" />
          <button  className="button" type="submit">Entrar</button>

          <a href="/register">
            <FiLogIn />
            Não tenho cadastro
          </a>
        </form>
      </section>
      <img src={heroesImg} alt="logo" />
    </div>
  );
}
