import styled from 'styled-components';

import { Form } from '@rocketseat/unform';
import Button from '~/components/Button';

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

  & input,
  & textarea {
    width: 100%;
    background: rgba(0, 0, 0, 0.1);
    border: 0;
    border-radius: 4px;
    height: 50px;
    padding: 0 15px;
    color: #fff;
    margin: 10px 0 0px;
    font-size: 18px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.7);
    }
  }

  & textarea {
    height: 200px;
    font: 18px 'Roboto', sans-serif;
    padding: 15px;
  }

  @media (max-width: 530px) {
    & input,
    & textarea {
      font-size: 16px;
      height: 44px;
    }

    & textarea {
      height: 130px;
    }
  }

  /* Validation Error Span */
  & span {
    font: 16px 'Roboto', sans-serif;
    color: #f94d6a;
    padding-left: 15px;
    margin: 2px 0 5px;
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
