import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { Spinner } from 'react-activity';

import {
  requestDetailsMeetup,
  clearMeetup,
} from '~/store/modules/meetup/actions';

import { setCurrentPage } from '~/store/modules/currentPage/action';

import { Container, Meetup, ContainerEmpty } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();

  dispatch(clearMeetup());

  dispatch(setCurrentPage('Dashboard'));

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('organizing');

      const data = response.data.map(meetup => ({
        ...meetup,
        dateFormatted: format(
          parseISO(meetup.date),
          "dd ' de ' MMMM ', às ' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      }));

      setMeetups(data);
      setLoading(false);
    }

    loadMeetups();
  }, [loading]);

  function handleDetails(meetup) {
    dispatch(requestDetailsMeetup(meetup));
  }

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <Link to="/new">
          <button type="button">
            <MdAddCircleOutline size={20} color="#fff" />
            <span>Novo &nbsp;</span> <span> meetup</span>
          </button>
        </Link>
      </header>

      {loading && (
        <ContainerEmpty>
          <Spinner size={25} color="#F94D6A" />
        </ContainerEmpty>
      )}

      {meetups.length >= 1 && !loading && (
        <ul>
          {meetups.map(meetup => (
            <Meetup key={meetup.id} past={meetup.past}>
              <strong>{meetup.title}</strong>

              <div>
                <span>{meetup.dateFormatted}</span>
                <button onClick={() => handleDetails(meetup)} type="button">
                  <MdChevronRight size={28} color="#fff" />
                </button>
              </div>
            </Meetup>
          ))}
        </ul>
      )}

      {meetups.length === 0 && !loading && (
        <ContainerEmpty>
          <h1>Nenhum meetup cadastrado!</h1>
        </ContainerEmpty>
      )}
    </Container>
  );
}
