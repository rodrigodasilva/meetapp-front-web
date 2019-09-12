import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { MdAddCircleOutline, MdChevronRight } from 'react-icons/md';
import { FaRegSadTear } from 'react-icons/fa';

import {
  requestDetailsMeetup,
  clearMeetup,
} from '~/store/modules/meetup/actions';
import { checkIfPageIsDashboard } from '~/store/modules/dashboard/action';

import { Container, Meetup, Empty } from './styles';

import api from '~/services/api';

export default function Dashboard() {
  const [meetups, setMeetups] = useState([]);

  const dispatch = useDispatch();

  dispatch(clearMeetup());
  dispatch(checkIfPageIsDashboard(true));

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
            <span>Novo &nbsp;</span> <span> meetup</span>
          </button>
        </Link>
      </header>

      {meetups.length > 1 ? (
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
      ) : (
        <Empty>
          <FaRegSadTear size={50} color="#fff" />
          <h1>Nenhum meetup cadastrado!</h1>
        </Empty>
      )}
    </Container>
  );
}
