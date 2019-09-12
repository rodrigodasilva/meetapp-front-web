import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 80px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  aside {
    display: flex;
    align-items: center;

    img {
      width: 31px;
      height: 32px;
    }

    a {
      font-weight: bold;
      color: #7159c1;
    }

    .buttonGoBack {
      background: none;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      font-weight: bold;
      font-size: 14px;
      margin-left: 25px;

      svg {
      }

      &:hover {
        opacity: 0.5;
      }
    }
  }

  .profile {
    display: flex;
    align-items: center;
  }

  @media (max-width: 529px) {
    .profile {
      display: none;
    }
  }

  @media (min-width: 530px) {
    .menu {
      display: none;
    }
  }

  .menu.open {
    position: fixed;
    z-index: 4;
    right: 45px;
  }

  .menu.open + nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    margin: 0;
    background: rgba(0, 0, 0, 0.8);
  }

  .menu.open + nav a {
    font-size: 25px;
    font-weight: bold;
    margin-bottom: 25px;
    color: #fff;

    &:hover {
      opacity: 0.7;
    }
  }

  .menu.open + nav button {
    font-weight: bold;
    margin: 0;
  }
`;

export const Profile = styled.nav`
  display: flex;
  margin-left: 20px;
  padding-left: 20px;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    a {
      display: block;
      margin-top: 4px;
      font-size: 14px;
      color: #999;
      text-transform: none;
    }
  }

  img {
    height: 32px;
    border-radius: 50px;
  }

  button {
    width: 71px;
    height: 42px;
    background: #d44059;
    border: 0;
    border-radius: 4px;
    color: #fff;
    font-weight: bold;
    margin-left: 30px;

    &:hover {
      background: ${darken(0.03, '#d44059')};
    }
  }
`;

export const ButtonMenu = styled.button`
  background: none;
  border: 0;
  border-radius: 4px;
  color: #fff;

  &:hover {
    opacity: 0.3;
  }
`;
