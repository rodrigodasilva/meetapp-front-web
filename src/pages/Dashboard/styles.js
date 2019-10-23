import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { lighten } from 'polished';

import Button from '~/components/Button';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 940px;
  min-height: calc(100% - 130px);
  display: flex;
  flex-direction: column;

  @media (max-width: 980px) {
    padding: 0 30px;
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;

  & > h1 {
    color: #fff;
    min-width: 200px;
    flex: 1;
    margin-bottom: 20px;
  }
`;

export const LinkAdd = styled(Link)`
  min-width: 172px;

  @media (max-width: 500px) {
    flex: 1;
  }
`;

export const ButtonAdd = styled(Button)`
  @media (max-width: 425px) {
    height: 35px;
  }
`;

export const ContainerMeetups = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;

  flex: 1;
`;

export const CardMeetup = styled.div`
  background: rgba(0, 0, 0, 0.2);
  padding: 20px 30px;
  border-radius: 4px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  position: relative;

  opacity: ${props => (props.past ? '0.5' : '1')};

  & > .title {
    font-size: 18px !important;
    color: #fff;
    margin-right: 10px;
    padding: 5px 0;
    flex: 1;
  }

  & > .date {
    margin-right: 30px;
    font-size: 16px;
    color: rgba(255, 255, 255, 0.6);

    @media (max-width: 555px) {
      font-size: 14px;
    }

    @media (max-width: 330px) {
      font-size: 12px;
    }
  }

  & > .btnDetails {
    background: none;
    border: 0;
    position: absolute;
    right: 15px;
  }
`;

export const ContainerEmpty = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  text-align: center;

  & > h1 {
    color: #fff;
    opacity: 0.5;
    font-weight: bold;
    font-size: 26px;

    @media (max-width: 530px) {
      font-size: 22px;
    }
  }
`;

export const Pagination = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;

  & > .pageDescription {
    margin: 0 10px;

    & span {
      color: #fff;
      font-weight: bold;
    }

    @media (max-width: 310px) {
      & .pageName {
        display: none;
      }
    }
  }
`;

export const ButtonPagination = styled.button`
  color: #fff;
  border: none;
  background: none;
  margin: 0 5px;

  &:hover {
    color: ${lighten(0.05, '#f94d6a')};
  }

  &:disabled {
    opacity: 0.2;
    cursor: not-allowed;

    &:hover {
      color: #fff;
    }
  }
`;
