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

export function updateMeetupSuccess() {
  return {
    type: '@meetup/UPDATE_MEETUP_SUCCESS',
  };
}

export function updateMeetupFailure() {
  return {
    type: '@meetup/UPDATE_MEETUP_FAILURE',
  };
}
