import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdDateRange, MdLocationOn, MdEdit, MdCancel } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Button } from './styles';

import { cancelMeetup } from '~/store/modules/meetup/actions';
import { setCurrentPage } from '~/store/modules/currentPage/action';

import history from '~/services/history';

function Details({ match }) {
  const idParamPage = Number(match.params.id);

  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.meetup);

  const dateFormatted = format(
    parseISO(meetup.date),
    "dd ' de ' MMMM ', às ' HH:mm'h'",
    {
      locale: pt,
    }
  );

  dispatch(setCurrentPage('Details'));

  useEffect(() => {
    if (idParamPage !== meetup.id) history.push('/');
  }, [idParamPage, meetup.id]);

  function handleCancelMeetup() {
    dispatch(cancelMeetup(meetup.id));
  }

  return (
    <Container>
      <header>
        <h1>{meetup.title}</h1>

        <div>
          {meetup.past ? (
            <h1 className="meetupIsAlready">Meetup já aconteceu!</h1>
          ) : (
            <>
              <Link to={`/edit/${meetup.id}`}>
                <Button type="button" primary>
                  <MdEdit size={20} color="#fff" />
                  Editar
                </Button>
              </Link>

              <Button type="button" onClick={handleCancelMeetup}>
                <MdCancel size={20} color="#fff" />
                Cancelar Meetup
              </Button>
            </>
          )}
        </div>
      </header>

      <img src={meetup.banner.url} alt="Banner" />
      <span>{meetup.description}</span>

      <footer>
        <time>
          <MdDateRange size={20} color="rgba(255, 255, 255, 0.6)" />
          {dateFormatted}
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
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};

export default Details;
