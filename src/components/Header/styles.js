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

  nav {
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

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
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
