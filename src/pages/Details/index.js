import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { MdDateRange, MdLocationOn } from 'react-icons/md';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';

import { Container, Header, Btn, Banner, DateDescription } from './styles';

import { cancelMeetup } from '~/store/modules/meetup/actions';

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

  useEffect(() => {
    if (idParamPage !== meetup.id) history.push('/');
  }, [idParamPage, meetup.id]);

  function handleCancelMeetup() {
    dispatch(cancelMeetup(meetup.id));
  }

  return (
    <Container>
      <Header>
        <h1 className="title">{meetup.title}</h1>

        {meetup.past ? (
          <h2 className="text-already-happened">Meetup já aconteceu!</h2>
        ) : (
          <div className="column--buttons">
            <Link to={`/meetup/edit/${meetup.id}`}>
              <Btn type="button" className="btn--primary">
                Editar
              </Btn>
            </Link>

            <Btn
              type="button"
              onClick={handleCancelMeetup}
              className="btn--danger"
            >
              Cancelar
            </Btn>
          </div>
        )}
      </Header>

      <Banner src={meetup.banner.url} alt="Banner" />
      <span className="description">{meetup.description}</span>

      <DateDescription>
        <time>
          <MdDateRange size={20} color="rgba(255, 255, 255, 0.6)" />
          {dateFormatted}
        </time>
        <address>
          <MdLocationOn size={20} color="rgba(255, 255, 255, 0.6)" />
          {meetup.location}
        </address>
      </DateDescription>
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
