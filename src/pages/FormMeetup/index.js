import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { parseISO } from 'date-fns';
import { MdAddCircleOutline } from 'react-icons/md';
import { Spinner } from 'react-activity';
import * as Yup from 'yup';

import BannerInput from '~/components/BannerInput';
import DatePickerMeetup from '~/components/DatePicker';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import api from '~/services/api';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Insira uma imagem'),
  title: Yup.string().required('Insira um título'),
  description: Yup.string().required('Insira uma descrição'),
  date: Yup.date('Insira uma data válida').required('Insira uma data'),
  location: Yup.string().required('Insira um local'),
});

function FormMeetup({ match }) {
  const { id } = match.params;
  const [meetup, setMeetup] = useState([]);
  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();

  // eslint-disable-next-line react-hooks/exhaustive-deps
  async function loadingMeetup() {
    setLoading(true);

    const response = await api.get(`meetups/${id}`);

    setMeetup(response.data);

    setLoading(false);
  }

  useEffect(() => {
    if (!id) {
      setMeetup([]);
    } else {
      loadingMeetup();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  console.tron.log('meetup', meetup);

  function handleCreateMeetup(data) {
    dispatch(createMeetupRequest(data));
  }

  function handleUpdateMeetup(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Form
        onSubmit={id ? handleUpdateMeetup : handleCreateMeetup}
        initialData={meetup}
        schema={schema}
      >
        <BannerInput name="banner_id" />

        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input
          name="description"
          placeholder="Descrição completa"
          multiline
          value={meetup.description}
        />
        <DatePickerMeetup name="date" placeholder="Data do meetup" />
        <Input name="location" type="text" placeholder="Localização" />

        <div className="divButtonSave">
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

export default FormMeetup;
