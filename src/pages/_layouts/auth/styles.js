import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-100deg, #22202c, #402845);

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;

  & .logo {
    width: 41px;
    height: 42px;
  }

  & form {
    display: flex;
    flex-direction: column;
    margin: 30px 10px;

    & input {
      background: rgba(0, 0, 0, 0.2);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 20px;
      color: #fff;
      margin: 10px 0 0;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    /* span error */
    & span {
      color: #f94d6a;
      align-self: flex-start;
      margin: 0 0 10px;
    }

    & button {
      margin-top: 20px;
    }

    & a {
      color: #fff;
      margin-top: 15px;
      font-size: 16px;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
