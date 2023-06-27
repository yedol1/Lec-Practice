import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import Header from "../components/Header";

const MoviesWrapper = styled.div`
  background-color: black;
  margin: 0 50px;
  padding: 0 30px;

  display: grid;
  grid-template-columns: repeat(3, 350px);
  gap: 30px;
  justify-content: space-around;

  @media screen and (min-width: 769px) and (max-width: 1125px) {
    grid-template-columns: repeat(2, 350px);
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 350px);
  }
`;

const Home = () => {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();
    setMovies(json.data.movies);
    setLoading(false);
    console.log(json.data.movies);
  };
  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      <Header />
      {loading ? (
        <div>"Loading..."</div>
      ) : (
        <MoviesWrapper>
          {movies.map((movie) => (
            <Movie
              key={movie.id}
              year={movie.year}
              id={movie.id}
              coverImg={movie.medium_cover_image}
              title={movie.title}
              summary={movie.summary}
              genres={movie.genres}
            />
          ))}
        </MoviesWrapper>
      )}
    </div>
  );
};
export default Home;
