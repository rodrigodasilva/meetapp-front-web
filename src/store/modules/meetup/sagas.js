import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
} from '~/store/modules/meetup/actions';

export function* createMeetup({ payload }) {
  try {
    console.tron.log(payload.data);
    yield call(api.post, 'meetups', payload.data);

    toast.success('Meetup criado com sucesso');

    yield put(createMeetupSuccess());
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados informados');

    yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  const { id, data } = payload;
  console.tron.log('updateMeetup', id, data);

  try {
    yield call(api.put, `meetups/${id}`, data);

    toast.success('Meetup atualizado com sucesso');

    yield put(updateMeetupSuccess());
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira os dados informados');

    yield put(updateMeetupFailure());
  }
}

export default all([
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
