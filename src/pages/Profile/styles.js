import styled from 'styled-components';

import { Form, Input } from '@rocketseat/unform';
import Button from '~/components/Button';

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
`;

export const FormUnform = styled(Form)`
  display: flex;
  flex-direction: column;
  margin-top: 30px;

  /* Span Error  */
  & span {
    color: #f94d6a;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
  }

  & hr {
    border: 0;
    height: 1px;
    background: rgba(255, 255, 255, 0.1);
    margin: 20px 0 20px;
  }
`;

export const InputUnform = styled(Input)`
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

  &:focus {
    border-left: 3px solid #f94d6a;
  }
`;

export const ButtonSubmit = styled(Button)`
  width: 162px;
  margin-top: 15px;
  align-self: flex-end;

  @media (max-width: 375px) {
    width: 100%;
  }
`;
