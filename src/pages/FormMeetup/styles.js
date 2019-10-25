import styled from 'styled-components';

import { Form } from '@rocketseat/unform';
import Button from '~/components/Button';

import InputStyled from '~/components/InputStyled';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  @media (max-width: 980px) {
    padding: 0 30px;
  }

  @media (max-width: 360px) {
    padding: 0 15px;
  }
`;

export const FormUnform = styled(Form)`
  display: flex;
  flex-direction: column;

  /* Validation Error Span */
  & span {
    font: 16px 'Roboto', sans-serif;
    color: #f94d6a;
    padding-left: 15px;
    margin: 2px 0 5px;
  }
`;

export const Input = styled(InputStyled)`
  font-size: 18px;

  &.multiline {
    height: 200px;
    font: 18px 'Roboto', sans-serif;
    padding: 15px;

    @media (max-width: 530px) {
      height: 130px;
      font-size: 16px;
    }
  }

  @media (max-width: 530px) {
    font-size: 16px;
    height: 44px;
  }
`;

export const ButtonSubmit = styled(Button)`
  margin-top: 20px;
  width: 180px;
  align-self: flex-end;

  @media (max-width: 375px) {
    width: 100%;
    font-size: 16px;
    height: 38px;
  }
`;
