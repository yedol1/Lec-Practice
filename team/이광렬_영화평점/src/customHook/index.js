import { fetchMovieData } from "api/movie";
import { useState } from "react";

export function useSearch(initialState = { page: 1, minimumRating: 7, sortBy: "year", orderBy: "desc", queryTerm: "" }) {
  const [searchParams, setSearchParams] = useState(initialState);

  const customHandleSearch = async () => {
    try {
      const data = await fetchMovieData(searchParams.page, searchParams.minimumRating, searchParams.sortBy, searchParams.orderBy, searchParams.queryTerm);
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  return { searchParams, setSearchParams, customHandleSearch };
}
