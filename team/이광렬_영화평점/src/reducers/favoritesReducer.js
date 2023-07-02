import { ADD_FAVORITE, REMOVE_FAVORITE } from "../actions/favoritesActions";

const favoritesReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return [...state, action.payload];
    case REMOVE_FAVORITE:
      return state.filter((movieId) => movieId !== action.payload);
    default:
      return state;
  }
};

export default favoritesReducer;
