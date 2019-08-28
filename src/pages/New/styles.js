import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      height: 200px;
      font: 18px 'Roboto', sans-serif;
      padding: 15px;
    }

    div {
      display: flex;
      justify-content: flex-end;
    }

    .react-datepicker__input-container {
      width: 100%;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 42px;
  width: 180px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #f94d6a;
  margin-top: 10px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${darken(0.06, '#F94D6A')};
  }
`;
