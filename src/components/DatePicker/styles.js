import styled from 'styled-components';

import { lighten } from 'polished';

export const Container = styled.div`
  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker__input-container {
    width: 100%;
  }

  .react-datepicker {
    padding: 1px;
    border: 2px solid #fff;
    box-shadow: 12px 15px 20px rgba(0, 0, 0, 0.05);
  }

  .react-datepicker__header {
    border-bottom: none;
    background: #d44459;
    border-radius: 4px;
  }

  .react-datepicker__navigation--previous {
    border-right-color: #fff;
  }

  .react-datepicker__navigation--next {
    border-left-color: #fff;
  }

  .react-datepicker-popper[data-placement^='top'] .react-datepicker__triangle {
    border-top-color: #fff;
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
    margin-left: 2px;
  }

  .react-datepicker__day-name {
    color: #fff;
  }

  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--selected {
    background: #d44459;
    border-radius: 50%;
    font-weight: bold;

    &:hover {
      background: ${lighten(0.03, '#F94D6A')};
    }
  }

  .react-datepicker__time-container
    .react-datepicker__time
    .react-datepicker__time-box
    ul.react-datepicker__time-list
    li.react-datepicker__time-list-item--selected {
    background-color: #d44459;

    &:hover {
      background: ${lighten(0.03, '#F94D6A')};
    }
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
`;
