import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 48px;

    h1 {
      color: #fff;
      font-size: 32px;
      font-weight: bold;
    }

    button {
      height: 42px;
      width: 172px;
      background: #f94d6a;
      border: 0;
      border-radius: 4px;

      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;

      font-weight: bold;
      color: #fff;
      font-size: 16px;

      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#F94D6A')};
      }

      svg {
        margin-right: 10px;
      }
    }
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.1);
  padding: 20px 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    font-size: 18px !important;
    color: #fff;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 30px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }
  }
`;
