import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import logo from '~/assets/logo.png';

export default function SignUp() {
  return (
    <>
      <img src={logo} alt="Gobarber" />

      <form>
        <input type="text" placeholder="Seu nome" />
        <input type="email" placeholder="Seu e-mail" />
        <input type="password" placeholder="Sua senha secreta" />

        <button type="submit">Criar conta</button>
        <Link to="/">Já tenho login</Link>
      </form>
    </>
  );
}
