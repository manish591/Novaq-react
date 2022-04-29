import { ACTION_TYPES } from 'reducer/constants/state-actions';

const stateReducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.SET_CATEGORIES:
      return { ...state, categories: action.payload.category };

    case ACTION_TYPES.SET_CURRENT_QUIZ:
      return { ...state, currentQuiz: action.payload.quiz };

    case ACTION_TYPES.SET_ANSWERS:
      return {
        ...state,
        setAnswers: {
          ...state.setAnswers,
          [action.payload.key]: {
            value: action.payload.value,
            score: action.payload.score
          }
        }
      };

    default:
      return state;
  }
};

export { stateReducer };
