import { ACTION_TYPES } from 'reducer/constants/state-actions';

const stateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: action.payload.category };

    default:
      return state;
  }
};

export { stateReducer };
