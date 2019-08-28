export function MeetupRequest(data) {
  // console.tron.log('actionMeetup', data);
  return {
    type: '@meetup/MEETUP_REQUEST',
    payload: { data },
  };
}

// export function Redirect() {
//   return {
//     type: '@meetup/REDIRECT',
//   };
// }

export function createMeetupRequest(data) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { data },
  };
}

export function createMeetupSuccess() {
  return {
    type: '@meetup/CREATE_MEETUP_SUCCESS',
  };
}

export function createMeetupFailure() {
  return {
    type: '@meetup/CREATE_MEETUP_FAILURE',
  };
}

export function updateMeetupRequest(id, data) {
  return {
    type: '@meetup/UPDATE_MEETUP_REQUEST',
    payload: { id, data },
  };
}

export function updateMeetupSuccess(data) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { data },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
