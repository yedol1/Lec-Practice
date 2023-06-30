import { useEffect, useState } from "react";

const useFetchMovie = (url) => {
  const [fetchedMovie, setFetchedMovie] = useState();

  const fetchData = async (url) => {
    const json = await (await fetch(url)).json();
    setFetchedMovie(json);
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return [fetchedMovie];
};
export default useFetchMovie;
// 로딩상태, 영화데이터, 오류
