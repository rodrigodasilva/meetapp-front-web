import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';

import { Container, Meetup } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups');

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

      console.tron.log(response.data);
    }

    loadMeetups();
  }, []);

  return (
    <Container>
      <header>
        <h1>Meus meetups</h1>
        <button type="submit">
          <MdAddCircleOutline size={20} color="#fff" />
          <div>Novo meetup</div>
        </button>
      </header>

      {meetups.map(meetup => (
        <Meetup key={meetup.id}>
          <strong>{meetup.title}</strong>
          <div>
            <span>{meetup.dateFormatted}</span>
            <Link
              to={{
                pathname: `/meetup/${meetup.id}`,
                state: { meetup },
              }}
            >
              <MdChevronRight size={24} color="#fff" />
            </Link>
          </div>
        </Meetup>
      ))}
    </Container>
  );
}
