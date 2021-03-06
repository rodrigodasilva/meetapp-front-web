import produce from 'immer';

const INITIAL_STATE = {
  meetup: null,
  loading: false,
};

function meetup(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetup/REQUEST_DETAILS_MEETUP': {
        draft.meetup = action.payload.meetup;
        break;
      }

      case '@meetup/CREATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@meetup/CREATE_MEETUP_SUCCESS': {
        draft.loading = false;
        break;
      }

      case '@meetup/CREATE_MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@meetup/UPDATE_MEETUP_REQUEST': {
        draft.loading = true;
        break;
      }

      case '@meetup/UPDATE_MEETUP_SUCCESS': {
        draft.meetup = action.payload.meetup;
        draft.loading = false;
        break;
      }

      case '@meetup/UPDATE_MEETUP_FAILURE': {
        draft.loading = false;
        break;
      }

      case '@meetup/CLEAR_MEETUP': {
        draft.meetup = null;
        break;
      }
      default:
    }
  });
}

export default meetup;
