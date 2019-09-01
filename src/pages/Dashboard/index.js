import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import {
  requestDetailsMeetup,
  clearMeetup,
} from '~/store/modules/meetup/actions';

import { Container, Meetup } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const dispatch = useDispatch();

  dispatch(clearMeetup());

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
    }

    loadMeetups();
  }, []);

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
            Novo meetup
          </button>
        </Link>
      </header>

      <ul>
        {meetups.map(meetup => (
          <Meetup key={meetup.id}>
            <strong>{meetup.title}</strong>

            <div>
              <span>{meetup.dateFormatted}</span>
              <button onClick={() => handleDetails(meetup)} type="button">
                <MdChevronRight size={24} color="#fff" />
              </button>
            </div>
          </Meetup>
        ))}
      </ul>
    </Container>
  );
}
