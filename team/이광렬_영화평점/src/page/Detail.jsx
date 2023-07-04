import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavorite, removeFavorite } from "modules/favorites";
import { fetchMovieDetail } from "api/movie";
import { useParams } from "react-router-dom";

import FAVORITE_ON from "images/favorite_on.svg";
import FAVORITE_OFF from "images/favorite_off.svg";
import Loading from "images/Rocket.gif";
import styled from "styled-components";
import Card from "components/Card";

const Detail = () => {
  const [movie, setMovie] = useState([]);
  const [loading, setLoading] = useState(false);
  const ID = useParams();
  console.log(ID);

  const dispatch = useDispatch();
  const favorites = useSelector((state) => state.favoritesList);

  const handleFavorite = (id) => {
    if (favorites.includes(id)) {
      dispatch(removeFavorite(id));
    } else {
      dispatch(addFavorite(id));
    }
  };

  useEffect(() => {
    const getData = async () => {
      const data = await fetchMovieDetail(ID.id);
      setMovie(data.data.movie);
      setLoading(true);
    };
    getData();
  }, [ID]);
  console.log(movie);

  return (
    <>
      <Header>
        <h1>세부정보</h1>
      </Header>
      <Main>
        {!loading ? (
          <LoadingPage>
            <img src={Loading} alt="loading" />
          </LoadingPage>
        ) : (
          <CardContainer>
            <Card movie={movie} />
            <div>
              {favorites.includes(movie.id) ? (
                <FavoriteBtn onClick={() => handleFavorite(movie.id)}>
                  <img src={FAVORITE_ON} alt="" />
                </FavoriteBtn>
              ) : (
                <FavoriteBtn onClick={() => handleFavorite(movie.id)}>
                  <img src={FAVORITE_OFF} alt="" />
                </FavoriteBtn>
              )}
              <p>{movie.description_full}</p>
            </div>
          </CardContainer>
        )}
      </Main>
    </>
  );
};

export default Detail;

const Header = styled.header`
  color: #000;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;
const Main = styled.main`
  margin-top: 80px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  > div {
    max-width: 500px;
    margin-left: 20px;
  }
`;
const FavoriteBtn = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;
  > img {
    width: 30px;
    height: 30px;
    margin: 10px;
  }
`;
const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 300px);
  img {
    width: 100px;
    height: 100px;
  }
`;
