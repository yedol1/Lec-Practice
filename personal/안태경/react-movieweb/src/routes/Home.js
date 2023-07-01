import { useEffect, useState } from "react";
import Movie from "../components/Movie";
import styled from "styled-components";
import Header from "../components/Header";
import axios from "axios";
import useFetchMovie from "../hooks/useFetchMovie";

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

async function getUsers() {
  const response = await axios.get(
    `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
  );
  return response.data;
}

const Home = () => {
  const [state, refetch] = useFetchMovie(getUsers, []);
  const { loading, data: users, error } = state; // state.data 를 users 키워드로 조회

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  const movies = users.data.movies;
  return (
    <div>
      <Header />

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
    </div>
  );
};
export default Home;
