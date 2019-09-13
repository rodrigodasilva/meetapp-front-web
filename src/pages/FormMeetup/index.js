import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import { MdAddCircleOutline } from 'react-icons/md';
import { Spinner } from 'react-activity';
import * as Yup from 'yup';

import BannerInput from '~/components/BannerInput';
import DatePickerMeetup from '~/components/DatePicker';

import {
  createMeetupRequest,
  updateMeetupRequest,
} from '~/store/modules/meetup/actions';

import { setCurrentPage } from '~/store/modules/currentPage/action';

import history from '~/services/history';

import { Container, Button } from './styles';

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

    dispatch(setCurrentPage('New'));
  }, [dispatch, idParamPage, meetup]);

  function handleCreateMeetup(data) {
    dispatch(createMeetupRequest(data));
  }

  function handleUpdateMeetup(data) {
    dispatch(updateMeetupRequest(meetup.id, data));
  }

  return (
    <Container>
      <Form
        onSubmit={meetup ? handleUpdateMeetup : handleCreateMeetup}
        initialData={initialData}
        schema={schema}
      >
        <BannerInput name="banner_id" />

        <Input name="title" type="text" placeholder="Título do Meetup" />
        <Input name="description" placeholder="Descrição completa" multiline />
        <DatePickerMeetup name="date" placeholder="Data do meetup" />
        <Input name="location" type="text" placeholder="Localização" />

        <div className="divButtonSave">
          <Button type="submit">
            {loading ? (
              <Spinner color="#fff" size={14} />
            ) : (
              <>
                <MdAddCircleOutline size={20} color="#fff" />
                {meetup ? 'Atualizar' : 'Salvar'} Meetup
              </>
            )}
          </Button>
        </div>
      </Form>
    </Container>
  );
}

export default FormMeetup;
