import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Spinner } from 'react-activity';
import * as Yup from 'yup';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

import BannerInput from '~/components/BannerInput';
import DatePickerMeetup from '~/components/DatePicker';

import { Container, Button } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.string().required('Insira uma imagem para o meetup'),
  title: Yup.string().required('Insira um título'),
  description: Yup.string().required('Insira uma descrição'),
  date: Yup.date('Insira uma data válida').required('Insira uma data'),
  location: Yup.string().required('Insira um local'),
});

export default function New() {
  const loading = useSelector(state => state.meetup.loading);
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit} schema={schema}>
        <BannerInput name="banner_id" />

        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        {/* <Input name="date" type="text" placeholder="Data do Meetup" /> */}
        <DatePickerMeetup name="date" placeholder="Data do meetup" />
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
