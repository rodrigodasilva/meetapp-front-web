import React, { useState, useEffect } from 'react';
import { parseISO, format } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
// import PropTypes from 'prop-types';
import { MdDateRange, MdLocationOn, MdEdit, MdCancel } from 'react-icons/md';

import { Container, Button } from './styles';

import api from '~/services/api';

function Details({ match }) {
  const { id } = match.params;

  // const [loading, setLoading] = useState(true);
  const [meetup, setMeetup] = useState([]);

  /**
   * Tive que setar a imagem separadamente pois, por algum
   * motivo não tava conseguindo acessar os dados do banner
   */
  const [image, setImage] = useState('');

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get(`meetups/${id}`);

      const { data } = response;
      setImage(data.banner.url);

      setMeetup({
        ...data,
        dateFormatted: format(
          parseISO(data.date),
          "dd ' de ' MMMM ', às ' HH:mm'h'",
          {
            locale: pt,
          }
        ),
      });
    }

    loadMeetups();
  }, [id]);

  // async function handleCancel(meetupId) {
  //   try {
  //     await api.delete(`/meetups/${meetupId}`);

  //     toast.success('Meetup cancelado');

  //     history.push('/dashboard');
  //   } catch (err) {
  //     toast.error('Erro. Tente novamento.');
  //   }
  // }

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

      <img src={image} alt="Banner" />
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
