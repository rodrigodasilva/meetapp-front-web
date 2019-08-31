import { all, put, call, takeLatest } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import api from '~/services/api';

import {
  createMeetupSuccess,
  createMeetupFailure,
  updateMeetupSuccess,
  updateMeetupFailure,
} from '~/store/modules/meetup/actions';

// export function requestMeetup({ payload }) {
//   // console.tron.log(payload.data);
//   history.push(`/edit/${payload.data.id}`);
// }

export function* createMeetup({ payload }) {
  try {
    // console.tron.log(payload.data);
    yield call(api.post, 'meetups', payload.data);

    toast.success('Meetup criado com sucesso');

    yield put(createMeetupSuccess());
  } catch (err) {
    toast.error('Erro ao criar meetup, confira os dados informados');

    // yield put(createMeetupFailure());
  }
}

export function* updateMeetup({ payload }) {
  const { id, data } = payload;

  try {
    yield call(api.put, `meetups/${id}`, data);
    // history.push('/');

    yield put(updateMeetupSuccess(data));
    toast.success('Meetup atualizado com sucesso');
  } catch (err) {
    toast.error('Erro ao atualizar meetup, confira os dados informados');

    yield put(updateMeetupFailure());
  }
}

// // export function Redirect() {
// //   history.push('/');
// // }

export default all([
  //   takeLatest('@meetup/MEETUP_REQUEST', requestMeetup),
  //   // takeLatest('@meetup/REDIRECT', Redirect),
  takeLatest('@meetup/CREATE_MEETUP_REQUEST', createMeetup),
  takeLatest('@meetup/UPDATE_MEETUP_REQUEST', updateMeetup),
]);
