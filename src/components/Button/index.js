import React from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-activity/lib/Spinner';

import { Container } from './styles';

export default function Button({ children, loading, ...rest }) {
  return (
    <Container {...rest}>
      {loading ? <Spinner size={10} color="#fff" /> : children}
    </Container>
  );
}

Button.propTypes = {
  children: PropTypes.oneOfType([PropTypes.string, PropTypes.element])
    .isRequired,
  loading: PropTypes.bool,
};

Button.defaultProps = {
  loading: false,
};
