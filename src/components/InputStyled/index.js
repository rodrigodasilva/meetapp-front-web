import React from 'react';
import PropTypes from 'prop-types';
import { Container } from './styles';

export default function InputStyled({ name, type, placeholder, ...rest }) {
  return (
    <Container name={name} type={type} placeholder={placeholder} {...rest} />
  );
}

InputStyled.propTypes = {
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
};

InputStyled.defaultProps = {
  placeholder: '',
};
