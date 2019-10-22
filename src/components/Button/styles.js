import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.button`
  height: 42px;
  width: 100%;
  padding: 0px 15px;
  background: #f94d6a;
  border: none;
  color: #fff;
  border-radius: 4px;
  text-transform: uppercase;
  font-weight: bold;

  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${lighten(0.03, '#F94D6A')};
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
