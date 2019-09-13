import styled from 'styled-components';

import { darken } from 'polished';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 940px;
  min-height: calc(100% - 130px);
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    padding: 0 30px;
  }

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

      @media (max-width: 530px) {
        font-size: 28px;
      }
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

    @media (max-width: 555px) {
      button {
        width: 120px;

        span + span {
          display: none;
        }
      }
    }

    @media (max-width: 500px) {
      h1 {
        font-size: 28px;
      }
    }

    @media (max-width: 400px) {
      a {
        width: 100px;

        button {
          width: 100px;
          height: 38px;
        }
      }
    }

    @media (max-width: 380px) {
      flex-direction: column;

      h1 {
        margin-bottom: 15px;
        text-align: center;
      }

      a {
        width: 100%;

        button {
          width: 100%;

          span + span {
            /* display: none; */
          }
        }
      }
    }
  }
`;

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;

  h1 {
    color: #fff;
    opacity: 0.5;
    font-weight: bold;
    font-size: 26px;

    @media (max-width: 530px) {
      font-size: 22px;
    }
  }
`;

export const Meetup = styled.li`
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  opacity: ${props => (props.past ? '0.5' : '1')};

  strong {
    font-size: 18px !important;
    color: #fff;
    margin-right: 10px;
  }

  div {
    display: flex;
    align-items: center;

    span {
      margin-right: 30px;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.6);
    }

    button {
      background: none;
      border: 0;
    }
  }

  @media (max-width: 555px) {
    flex-direction: column;

    strong {
      margin-bottom: 5px;
      align-self: flex-start;
    }

    div {
      width: 100%;
      justify-content: space-between;
    }
  }
`;
