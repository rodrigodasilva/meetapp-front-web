import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import { MdAddCircleOutline } from 'react-icons/md';

import BannerInput from '~/components/BannerInput';
import { updateMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

function Edit({ location }) {
  const { meetup } = location.state;
  console.tron.log('meetup', meetup);

  const dispatch = useDispatch();

  const loading = useSelector(state => state.meetup.loading);

  function handleSubmit(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Form
        onSubmit={handleSubmit}
        initialData={{ ...meetup, date: parseISO(meetup.date) }}
      >
        <BannerInput name="banner_id" />

        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <Input name="date" type="text" placeholder="Data do Meetup" />
        <Input name="location" type="text" placeholder="Localização" />

        <div>
          <Button type="submit">
            <MdAddCircleOutline size={20} color="#fff" />
            Salvar Meetup
          </Button>
        </div>
      </Form>
    </Container>
  );
}

Edit.propTypes = {
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

export default Edit;
