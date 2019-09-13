import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  @media (max-width: 980px) {
    padding: 0 30px;
  }

  @media (max-width: 360px) {
    padding: 0 15px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    hr {
      border: 0;
      height: 1px;
      background: rgba(255, 255, 255, 0.1);
      margin: 20px 0 20px;
    }

    div {
      display: flex;
      justify-content: flex-end;

      button {
        margin: 5px 0;
        height: 42px;
        width: 162px;
        background: #f94d6a;
        border: 0;
        border-radius: 4px;

        transition: background 0.2s;

        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;

        font-weight: bold;
        color: #fff;
        font-size: 16px;

        &:hover {
          background: ${darken(0.03, '#F94D6A')};
        }

        svg {
          margin-right: 10px;
        }

        @media (max-width: 375px) {
          width: 100%;
          margin-top: 15px;
        }
      }
    }
  }
`;
