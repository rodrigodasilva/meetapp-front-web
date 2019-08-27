import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { MdDateRange, MdLocationOn, MdEdit, MdCancel } from 'react-icons/md';

import { Container, Button } from './styles';

function Details({ location }) {
  // const { meetup } = location.state;

  return (
    <Container>
      <header>
        <h1>Titulo</h1>

        <div>
          <Link to="/edit">
            <Button type="button" primary>
              <MdEdit size={20} color="#fff" />
              Editar
            </Button>
          </Link>
          <Link to="/">
            <Button type="button">
              <MdCancel size={20} color="#fff" />
              Cancelar
            </Button>
          </Link>
        </div>
      </header>

      <img
        src="https://www.bahiacomenta.com.br/wp-content/uploads/2018/04/banner1.jpg"
        alt="Banner"
      />

      <span>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem eveniet
        ipsa animi doloremque consequuntur ea beatae et cumque quis sapiente
        fugiat distinctio, eaque perspiciatis maiores modi dicta nostrum, ullam
        consequatur.
      </span>

      <footer>
        <time>
          <MdDateRange size={20} color="rgba(255, 255, 255, 0.6)" /> 25 de junho
          de 2019
        </time>
        <address>
          <MdLocationOn size={20} color="rgba(255, 255, 255, 0.6)" />
          Parque Savoy City, SP
        </address>
      </footer>
    </Container>
  );
}

Details.propTypes = {
  location: PropTypes.shape({
    state: PropTypes.shape({
      meetup: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
        location: PropTypes.string,
        file: PropTypes.shape({
          url: PropTypes.string,
        }),
        dateFormatted: PropTypes.string,
      }),
    }),
  }).isRequired,
};

export default Details;
