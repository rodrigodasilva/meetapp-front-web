import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { MdDateRange, MdLocationOn, MdEdit, MdCancel } from 'react-icons/md';

import { Container, Button } from './styles';

import history from '~/services/history';

function Details({ match }) {
  // const idParamPage = Number(match.params.id);

  const meetup = useSelector(state => state.meetup.meetup);

  // useEffect(() => {
  //   if (idParamPage !== meetup.id) history.push('/');
  // }, [idParamPage, meetup.id]);

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          <Link to={`/edit/${meetup.id}`}>
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

      <img src={meetup.banner.url} alt="Banner" />
      <span>{meetup.description}</span>

      <footer>
        <time>
          <MdDateRange size={20} color="rgba(255, 255, 255, 0.6)" />{' '}
          {meetup.dateFormatted}
        </time>
        <address>
          <MdLocationOn size={20} color="rgba(255, 255, 255, 0.6)" />
          {meetup.location}
        </address>
      </footer>
    </Container>
  );
}

// Details.propTypes = {
//   location: PropTypes.shape({
//     state: PropTypes.shape({
//       meetup: PropTypes.shape({
//         id: PropTypes.number,
//         title: PropTypes.string,
//         description: PropTypes.string,
//         location: PropTypes.string,
//         file: PropTypes.shape({
//           url: PropTypes.string,
//         }),
//         dateFormatted: PropTypes.string,
//       }),
//     }),
//   }).isRequired,
// };

export default Details;
