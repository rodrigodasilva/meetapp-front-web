import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MdChevronLeft, MdMenu } from 'react-icons/md';

import { signOut } from '~/store/modules/auth/actions';

import logo from '~/assets/logo.png';

import {
  Container,
  Content,
  ContentLeft,
  Logo,
  ButtonGoBack,
  ContentRight,
  Profile,
  ButtonLogout,
  ButtonMenu,
} from './styles';

import history from '~/services/history';

export default function Header() {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  const currentPage = window.location.pathname;

  const [toggle, setToggle] = useState(false);

  function handleSignOut() {
    dispatch(signOut());
  }

  function goBack() {
    history.goBack();
  }

  function handleToggleMenu() {
    setToggle(!toggle);
  }

  return (
    <Container>
      <Content>
        <ContentLeft>
          <Link to="/dashboard">
            <Logo src={logo} alt="MeetApp" />
          </Link>

          <ButtonGoBack
            type="button"
            onClick={goBack}
            className={currentPage === '/dashboard' ? 'hidden' : ''}
          >
            <MdChevronLeft size={30} color="#fff" />
            Voltar
          </ButtonGoBack>
        </ContentLeft>

        <ButtonMenu type="button" onClick={handleToggleMenu}>
          <MdMenu size={35} color="#fff" />
        </ButtonMenu>

        <ContentRight className={toggle ? 'menuMobile' : ''}>
          {toggle && (
            <Link
              to="/dashboard"
              onClick={() => setToggle(false)}
              className={
                currentPage === '/dashboard'
                  ? 'LinkMenuMobile active'
                  : 'LinkMenuMobile'
              }
            >
              Dashboard
            </Link>
          )}

          <Profile
            to="/profile"
            onClick={() => setToggle(false)}
            className={currentPage === '/profile' ? 'active' : ''}
          >
            <strong className={toggle ? 'hidden' : ''}>{profile.name}</strong>
            <span className={toggle ? 'LinkMenuMobile' : ''} to="/profile">
              Meu Perfil
            </span>
          </Profile>

          <ButtonLogout
            type="button"
            onClick={handleSignOut}
            className={toggle ? 'ButtonMenuMobile' : ''}
          >
            Sair
          </ButtonLogout>
        </ContentRight>
      </Content>
    </Container>
  );
}
