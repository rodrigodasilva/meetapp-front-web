import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdMenu } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import { Container, Content, Profile, ButtonMenu } from './styles';

import history from '~/services/history';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);
  const checkIfPageIsDashboard = useSelector(state => state.dashboard.check);

  const [toggle, setToggle] = useState(false);

  function handleSignOut() {
    dispatch(signOut());
  }

  function goBack() {
    history.goBack();
  }

  function handleClickMenu() {
    setToggle(!toggle);
  }

  return (
    <Container>
      <Content>
        <aside>
          <Link to="/dashboard">
            <img src={logo} alt="MeetApp" />
          </Link>
          {!checkIfPageIsDashboard && (
            <button type="button" onClick={goBack} className="buttonGoBack">
              <MdChevronLeft size={30} color="#fff" />
              Voltar
            </button>
          )}
        </aside>

        <ButtonMenu
          type="button"
          className={toggle ? 'menu open' : 'menu'}
          onClick={handleClickMenu}
        >
          <MdMenu size={35} color="#fff" />
        </ButtonMenu>

        <Profile className="profile">
          {!toggle ? (
            <>
              <div>
                <strong>{profile.name}</strong>
                <Link to="/profile">Meu Perfil</Link>
              </div>

              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </>
          ) : (
            <>
              <div>
                <Link to="/profile" onClick={() => setToggle(false)}>
                  Meu Perfil
                </Link>
              </div>

              <div>
                <Link to="/new" onClick={() => setToggle(false)}>
                  Novo Meetup
                </Link>
              </div>

              <button type="button" onClick={handleSignOut}>
                Sair
              </button>
            </>
          )}
        </Profile>
      </Content>
    </Container>
  );
}
