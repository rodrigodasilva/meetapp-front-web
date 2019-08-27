import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;
    width: 100%;
    height: 300px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      opacity: 0.7;
    }

    img {
      object-fit: cover;
      border-radius: 4px;
      border: none;

      margin-bottom: 20px;
    }

    input {
      display: none;
      width: 100%;
      height: 80px;
      background: #555;
    }
  }
`;
