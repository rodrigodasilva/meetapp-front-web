import styled from 'styled-components';

export const Container = styled.div`
  label {
    cursor: pointer;
    width: 100%;
    height: 300px;
    background: rgba(0, 0, 0, 0.4);
    border-radius: 4px;
    margin-bottom: 20px;

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
      width: 100%;
      height: 300px;
    }

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      strong {
        color: rgba(255, 255, 255, 0.3);
        font-size: 20px;
        line-height: 23px;
        font-weight: bold;
      }
    }

    input {
      display: none;
      width: 100%;
      height: 80px;
    }
  }

  @media (max-width: 610px) {
    margin-left: -30px;
    margin-right: -30px;
  }

  @media (max-width: 450px) {
    img {
      height: 200px;
    }
  }

  @media (max-width: 250px) {
    img {
      height: 160px;
    }
  }
`;
