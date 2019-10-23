import styled from 'styled-components';
import { darken } from 'polished';

import Button from '~/components/Button';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;
  display: flex;
  flex-direction: column;

  & .description {
    font-size: 18px;
    color: #fff;
    margin-bottom: 30px;
    line-height: 24px;
  }

  @media (max-width: 980px) {
    padding: 0 30px;
  }

  @media (max-width: 360px) {
    padding: 0 15px;
  }
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 30px;

  & .title {
    font-size: 32px;
    color: #fff;
    margin: 0 15px 10px 0;

    @media (max-width: 530px) {
      font-size: 28px;
    }
  }

  & .text-already-happened {
    color: #d44059;
    font-size: 24px;

    @media (max-width: 530px) {
      font-size: 20px;
    }
  }

  & .column--buttons {
    display: flex;
  }
`;

export const Btn = styled(Button)`
  width: 120px;
  margin-bottom: 10px;

  &.btn--primary {
    background: #4dbaf9;

    &:hover {
      background: ${darken(0.06, '#4DBAF9')};
    }
  }

  &.btn--danger {
    background: #d44059;
    margin-left: 15px;

    &:hover {
      background: ${darken(0.03, '#D44059')};
    }
  }

  @media (max-width: 760px) {
    height: 34px;
    font-size: 14px;
  }
`;

export const Banner = styled.img`
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
`;

export const DateDescription = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  & time,
  & address {
    color: rgba(255, 255, 255, 0.6);
    font-size: 16px;
    margin: 0 30px 10px 0;
    display: flex;
    justify-content: center;
    align-items: center;
    font-style: normal;

    svg {
      margin-right: 10px;
      min-width: 15px;
    }

    @media (max-width: 360px) {
      font-size: 14px;
    }
  }
`;
