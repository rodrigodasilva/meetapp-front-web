import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';

import { MdAddCircleOutline } from 'react-icons/md';

import { createMeetupRequest } from '~/store/modules/meetup/actions';

import BannerInput from '~/components/BannerInput';

import { Container, Button } from './styles';

export default function New() {
  const dispatch = useDispatch();

  function handleSubmit(data) {
    dispatch(createMeetupRequest(data));
  }

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
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
