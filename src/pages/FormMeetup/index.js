import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { Spinner } from 'react-activity';
import * as Yup from 'yup';

import BannerInput from '~/components/BannerInput';
import DatePickerMeetup from '~/components/DatePicker';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import history from '~/services/history';

import { Container, FormUnform, ButtonSubmit } from './styles';

const schema = Yup.object().shape({
  banner_id: Yup.number().required('Insira uma imagem'),
  title: Yup.string().required('Insira um título'),
  description: Yup.string().required('Insira uma descrição'),
  date: Yup.date('Insira uma data válida').required('Insira uma data'),
  location: Yup.string().required('Insira um local'),
});

function FormMeetup({ match }) {
  const idParamPage = Number(match.params.id);

  const dispatch = useDispatch();

  const meetup = useSelector(state => state.meetup.meetup);
  const loading = useSelector(state => state.meetup.loading);

  const initialData = !idParamPage ? [] : meetup;

  useEffect(() => {
    if (idParamPage) {
      if (meetup) {
        if (idParamPage !== meetup.id) history.push('/');
      }
    }
  }, [dispatch, idParamPage, meetup]);

  function handleCreateMeetup(data) {
    dispatch(createMeetupRequest(data));
  }

  function handleUpdateMeetup(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <FormUnform
        onSubmit={meetup ? handleUpdateMeetup : handleCreateMeetup}
        initialData={initialData}
        schema={schema}
      >
        <BannerInput name="banner_id" />

        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePickerMeetup name="date" placeholder="Data do meetup" />
        <Input name="location" type="text" placeholder="Localização" />

        <ButtonSubmit type="submit" loading={loading}>
          {meetup ? 'Atualizar' : 'Salvar'} Meetup
        </ButtonSubmit>
      </FormUnform>
    </Container>
  );
}

FormMeetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }).isRequired,
  }).isRequired,
};

export default FormMeetup;
