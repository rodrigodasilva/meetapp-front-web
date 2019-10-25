import styled from 'styled-components';

import { Input } from '@rocketseat/unform';

export const Container = styled(Input)`
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  border: 0;
  border-radius: 4px;
  height: 50px;
  padding: 0 15px;
  color: #fff;
  margin: 10px 0 0px;

  &::placeholder {
    color: rgba(255, 255, 255, 0.7);
  }

  &:focus {
    border-left: 3px solid #f94d6a;
  }
`;
