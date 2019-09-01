export function requestDetailsMeetup(meetup) {
  return {
    type: '@meetup/REQUEST_DETAILS_MEETUP',
    payload: { meetup },
  };
}

export function createMeetupRequest(meetup) {
  return {
    type: '@meetup/CREATE_MEETUP_REQUEST',
    payload: { meetup },
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

export function updateMeetupSuccess(meetup) {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
    payload: { meetup },
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}

export function clearMeetup() {
  return {
    type: '@meetup/CLEAR_MEETUP',
  };
}
