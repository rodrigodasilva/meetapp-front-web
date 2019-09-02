import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdChevronLeft } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';
import { checkIfPageIsDashboard } from '~/store/modules/dashboard/action';

import logo from '~/assets/logo.png';

import { Container, Content, Profile } from './styles';

import history from '~/services/history';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const checkIfPageIsDashboard = useSelector(state => state.dashboard.check);
  console.tron.log('checkIfPageIsDashboard', checkIfPageIsDashboard);

  function handleSignOut() {
    dispatch(signOut());
  }

  function goBack() {
    history.goBack();
  }

  return (
    <Container>
      <Content>
        <nav>
          <Link to="/dashboard">
            <img src={logo} alt="Gobarber" />
          </Link>
          {!checkIfPageIsDashboard && (
            <button type="button" onClick={goBack} className="buttonGoBack">
              <MdChevronLeft size={30} color="#fff" />
              Voltar
            </button>
          )}
        </nav>

        <aside>
          <Profile>
            <div>
              <strong>{profile.name}</strong>
              <Link to="/profile">Meu Perfil</Link>
            </div>
            <button type="button" onClick={handleSignOut}>
              Sair
            </button>
          </Profile>
        </aside>
      </Content>
    </Container>
  );
}
