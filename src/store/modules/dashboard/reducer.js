import produce from 'immer';

const INITIAL_STATE = {
  check: true,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@dashboard/CHECK_IF_PAGE_IS_DASHBOARD': {
        draft.check = action.payload.check;
        break;
      }

      default:
    }
  });
}
