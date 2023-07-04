// -----------Action Type,함수 정의-----------------//
const ADD_FAVORITE = "favorites/ADD_FAVORITE";
const REMOVE_FAVORITE = "favorites/REMOVE_FAVORITE";

export const addFavorite = (movieId) => {
  return {
    type: ADD_FAVORITE,
    payload: movieId,
  };
};

export const removeFavorite = (movieId) => {
  return {
    type: REMOVE_FAVORITE,
    payload: movieId,
  };
};

// -----------초기상태 작성-----------------//

const initialState = {
  favoritesList: [],
};

// -----------Reducer 정의-----------------//

const favoritesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return { ...state, favoritesList: [...state.favoritesList, action.payload] };
    case REMOVE_FAVORITE:
      return { ...state, favoritesList: state.favoritesList.filter((movieId) => movieId !== action.payload) };
    default:
      return state;
  }
};

export default favoritesReducer;
