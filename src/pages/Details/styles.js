import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 50px;

    h1 {
      font-size: 32px;
      font-weight: bold;
      color: #fff;
    }

    div {
      display: flex;
      flex-direction: row;
    }
  }

  img {
    height: 300px;
    width: 100%;
    background: #eee;
    margin-bottom: 25px;
  }

  span {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 32px;
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

  width: ${props => (props.primary ? '116px' : '138px')};
  background: ${props => (props.primary ? '#4DBAF9' : '#D44059')};

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${props =>
      props.primary ? darken(0.06, '#4DBAF9') : darken(0.03, '#D44059')};
  }
`;
