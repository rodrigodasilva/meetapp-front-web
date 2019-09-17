import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    padding: 0 30px;
  }

  @media (max-width: 360px) {
    padding: 0 15px;
  }

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;

    > h1 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;

      @media (max-width: 760px) {
        text-align: center;
      }

      @media (max-width: 530px) {
        font-size: 28px;
      }
    }

    div h2 {
      color: #d44059;
      font-size: 24px;
      font-weight: bold;

      @media (max-width: 530px) {
        font-size: 20px;
      }
    }

    div {
      display: flex;
      flex-direction: row;
    }

    @media (max-width: 760px) {
      flex-direction: column;

      div {
        justify-content: space-between;
        width: 100%;
        margin-top: 20px;
      }
    }

    @media (max-width: 380px) {
      div button {
        font-size: 14px;
      }
    }

    @media (max-width: 290px) {
      div {
        flex-direction: column;

        a {
          margin-bottom: 15px;
        }

        a,
        button {
          width: 100%;
        }
      }
    }

    div.alreadyHappened {
      display: flex;
      flex-direction: row;
      justify-content: flex-end;
    }
  }

  img {
    height: 300px;
    background: #eee;
    margin-bottom: 25px;

    @media (max-width: 610px) {
      margin-left: -30px;
      margin-right: -30px;
    }

    @media (max-width: 450px) {
      height: 200px;
    }

    @media (max-width: 360px) {
      margin-left: -15px;
      margin-right: -15px;
    }

    @media (max-width: 250px) {
      height: 160px;
    }
  }

  span {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 24px;
  }

  footer {
    display: flex;
    flex-direction: row;

    time,
    address {
      color: rgba(255, 255, 255, 0.6);
      font-size: 16px;
      margin-right: 30px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-style: normal;

      svg {
        margin-right: 10px;
        min-width: 15px;
      }
    }

    @media (max-width: 510px) {
      flex-direction: column;
      align-items: flex-start;

      time {
        margin-bottom: 10px;
      }
    }

    @media (max-width: 360px) {
      time,
      address {
        font-size: 14px;
      }
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 42px;
  margin-left: 15px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;

  width: ${props => (props.primary ? '116px' : '120px')};
  background: ${props => (props.primary ? '#4DBAF9' : '#D44059')};

  &:hover {
    background: ${props =>
      props.primary ? darken(0.06, '#4DBAF9') : darken(0.03, '#D44059')};
  }

  @media (max-width: 760px) {
    margin-left: 0;
    height: 34px;
    font-size: 14px;
  }
`;
