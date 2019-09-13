import produce from 'immer';

const INITIAL_STATE = {
  page: '',
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@currentPage/CHECK_CURRENT_PAGE': {
        draft.page = action.payload.page;
        break;
      }

      case '@currentPage/SET_CURRENT_PAGE': {
        draft.page = action.payload.page;
        break;
      }

      default:
    }
  });
}
