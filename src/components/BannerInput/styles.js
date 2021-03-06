import styled from 'styled-components';

export const Container = styled.div`
  @media (max-width: 610px) {
    margin-left: -30px;
    margin-right: -30px;
  }

  @media (max-width: 360px) {
    margin-left: -15px;
    margin-right: -15px;
  }
`;

export const Label = styled.label`
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

  & img {
    object-fit: cover;
    border-radius: 4px;
    border: none;
    width: 100%;
    height: 300px;
  }

  & input {
    display: none;
    width: 100%;
    height: 80px;
  }

  @media (max-width: 375px) {
    &,
    & img {
      height: 190px;
    }
  }

  @media (max-width: 425px) {
    &,
    & img {
      height: 220px;
    }
  }
`;

export const WithoutBanner = styled.div`
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
`;
