import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { darken } from 'polished';

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 0 30px;
  margin-bottom: 40px;

  @media (max-width: 390px) {
    padding: 0 20px;
  }
`;

export const Content = styled.div`
  height: 80px;
  max-width: 940px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const ContentLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const Logo = styled.img`
  width: 35px;
`;

export const ButtonGoBack = styled.button`
  background: none;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  font-weight: bold;
  font-size: 14px;
  margin-left: 25px;

  &:hover {
    opacity: 0.3;
  }

  &.hidden {
    display: none;
  }

  @media (max-width: 280px) {
    display: none;
  }
`;

export const ContentRight = styled.div`
  display: flex;
  align-items: center;

  &.menuMobile {
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
    background: linear-gradient(-90deg, #402845, #22202c);
    opacity: 0.95;
    z-index: 2;

    & > a {
      font-size: 24px;

      &.active {
        position: relative;

        &::after {
          content: '';
          position: absolute !important;
          width: 100%;
          height: 4px;
          border-radius: 4px;
          margin-top: 2px;
          bottom: -5px;
          left: 0;
          background-color: #d44059 !important;
        }
      }
    }
  }

  & > a {
    color: #fff;
    font-weight: bold;
    font-size: 14px;
    margin: 10px;
  }

  @media (max-width: 390px) {
    display: none;
  }
`;

export const Profile = styled(Link)`
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  & > strong {
    color: #fff;
    font-size: 14px;

    &.hidden {
      display: none;
    }
  }

  & > span {
    font-size: 14px;
    color: #999;
    font-weight: normal;
    margin-top: 4px;

    &.LinkMenuMobile {
      font-size: 24px;
      font-weight: bold;
      color: #fff;
    }
  }
`;

export const ButtonLogout = styled.button`
  width: 71px;
  height: 42px;
  background: #d44059;
  border: 0;
  border-radius: 4px;
  color: #fff;
  font-weight: bold;
  margin-left: 20px;
  font-size: 16px;

  &:hover {
    background: ${darken(0.03, '#d44059')};
  }

  &.ButtonMenuMobile {
    height: 32px;
    margin: 30px 0;
  }
`;

export const ButtonMenu = styled.button`
  background: none;
  border: 0;
  color: #fff;
  z-index: 4;
  display: none;

  &:hover {
    opacity: 0.3;
  }

  @media (max-width: 390px) {
    display: flex;
  }
`;
