import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import { MdAddCircleOutline } from 'react-icons/md';
import { Spinner } from 'react-activity';

import BannerInput from '~/components/BannerInput';
import DatePicker from '~/components/DatePicker';

import { updateMeetupRequest } from '~/store/modules/meetup/actions';

import { Container, Button } from './styles';

function Edit() {
  const meetup = useSelector(state => state.meetup.data);
  const loading = useSelector(state => state.meetup.loading);

  const dispatch = useDispatch();

  // console.tron.log('edit', meetup);

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
        {/* <DatePicker name="date" placeholder="Data do meetup" /> */}
        <Input name="date" type="text" placeholder="Data do Meetup" />
        <Input name="location" type="text" placeholder="Localização" />
        <div>
          <Button type="submit">
            {loading ? (
              <Spinner color="#fff" size={14} />
            ) : (
              <>
                <MdAddCircleOutline size={20} color="#fff" />
                Salvar Meetup
              </>
            )}
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
