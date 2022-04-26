export const initialState = {
  user: null,
  score: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_USER':
      return {
        ...state,
        user: action.user,
      };
    case 'UPDATE_SCORE':
      return {
        ...state,
        score: state.score + action.score,
      };
    case 'RESET_SCORE':
      return {
        name: null,
        score: 0
      }
    default:
      return state;
  }
};

export default reducer;
