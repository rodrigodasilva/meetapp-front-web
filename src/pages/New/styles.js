import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 940px;
  margin: 50px auto;

  form {
    display: flex;
    flex-direction: column;

    input,
    textarea {
      width: 100%;
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 50px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 18px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    textarea {
      height: 200px;
      font: 18px 'Roboto', sans-serif;
      padding: 15px;
    }

    .react-datepicker__input-container {
      width: 100%;
    }

    .react-datepicker {
      border: 2px solid #d44459;
      box-shadow: 12px 15px 20px rgba(0, 0, 0, 0.05);
    }

    .react-datepicker__header {
      border-bottom: none;
      background: #d44459;
      border-radius: 0;
    }

    .react-datepicker__navigation--previous {
      border-right-color: #fff;
    }

    .react-datepicker__navigation--next {
      border-left-color: #fff;
    }

    .react-datepicker-popper[data-placement^='top']
      .react-datepicker__triangle {
      border-top-color: #d44459;
      bottom: -1px;
    }

    .react-datepicker__current-month {
      color: #fff;
    }

    .react-datepicker-time__header {
      color: #fff;
    }

    .react-datepicker__time-container {
      border-left: none;
    }

    .react-datepicker__day-name {
      color: #fff;
    }

    .react-datepicker__day--keyboard-selected,
    .react-datepicker__day--selected {
      background: #d44459;
      border-radius: 50%;
      font-weight: bold;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item--selected {
      background-color: #d44459;
    }

    .react-datepicker__time-container
      .react-datepicker__time
      .react-datepicker__time-box
      ul.react-datepicker__time-list
      li.react-datepicker__time-list-item {
      height: 28px;
      padding: 5px 0px;
      border-radius: 4px;
    }

    .react-datepicker__time,
    .react-datepicker__time-box {
      border-bottom-right-radius: 4px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;

  height: 42px;
  width: 180px;
  border: 0;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background: #f94d6a;
  margin-top: 10px;

  svg {
    margin-right: 10px;
  }

  &:hover {
    background: ${darken(0.06, '#F94D6A')};
  }
`;
