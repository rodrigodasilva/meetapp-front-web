import React, { useRef, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import { parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { useField } from '@rocketseat/unform';

import { Container } from './styles';

export default function DatePickerMeetup({ name, placeholder }) {
  const ref = useRef(null);
  const { fieldName, registerField, defaultValue, error } = useField(name);

  const parsedDate = parseISO(defaultValue);
  const dateSelected = +parsedDate ? parsedDate : '';
  const [selected, setSelected] = useState(dateSelected);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: ref.current,
      path: 'props.selected',
      clearValue: pickerRef => {
        pickerRef.clear();
      },
    });
  }, [ref.current, fieldName]); // eslint-disable-line

  return (
    <Container>
      <DatePicker
        name={fieldName}
        selected={selected}
        onChange={date => setSelected(date)}
        ref={ref}
        dateFormat="dd 'de' MMMM 'de' yyyy, HH:mm'h'"
        minDate={new Date()}
        showTimeSelect
        timeCaption="Hora"
        timeFormat="HH:mm"
        timeIntervals={60}
        placeholderText={placeholder}
        autoComplete="off"
        locale={pt}
      />
      {error && <span>Insira uma data</span>}
    </Container>
  );
}

DatePickerMeetup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};
