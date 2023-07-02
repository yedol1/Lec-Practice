import axios from "./index";

export const fetchMovieData = async (page, minimum_rating, sort_by, order_by, query_term) => {
  const response = await axios.get("/list_movies.json", {
    params: {
      page: page,
      minimum_rating: minimum_rating,
      sort_by: sort_by,
      order_by: order_by,
      query_term: query_term,
    },
  });

  return response.data;
};

export const fetchMovieDetail = async (id) => {
  const response = await axios.get("/movie_details.json", {
    params: {
      movie_id: id,
    },
  });

  return response.data;
};
