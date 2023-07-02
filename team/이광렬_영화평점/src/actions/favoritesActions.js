export const ADD_FAVORITE = "ADD_FAVORITE";
export const REMOVE_FAVORITE = "REMOVE_FAVORITE";

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
