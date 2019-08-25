import React from 'react';
import { Link } from 'react-router-dom';

// import { Container } from './styles';

import logo from '~/assets/logo.png';

export default function SignIn() {
  return (
    <>
      <img src={logo} alt="MeetApp" />

      <form>
        <input type="email" placeholder="Digite seu email" />
        <input type="password" placeholder="Digite sua senha" />

        <button type="submit">Entrar</button>
        <Link to="/register">Criar conta gratuita</Link>
      </form>
    </>
  );
}
