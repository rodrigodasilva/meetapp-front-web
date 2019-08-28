import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdDateRange, MdLocationOn, MdEdit, MdCancel } from 'react-icons/md';

import { MeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

function Details({ location }) {
  const { meetup } = location.state;

  const dispatch = useDispatch();

  // console.tron.log(meetup);

  function handleSubmit() {
    dispatch(MeetupRequest(meetup));
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          {/* <Link
            to={{
              pathname: `/edit/${meetup.id}`,
              state: { meetup },
            }}
          > */}
          <Button type="button" primary onClick={handleSubmit}>
            <MdEdit size={20} color="#fff" />
            Editar
          </Button>
          {/* </Link> */}
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
