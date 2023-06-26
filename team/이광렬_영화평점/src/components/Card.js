import React from "react";
import styled from "styled-components";
import star from "../images/별점.svg";
const Card = ({ movie }) => {
  return (
    <List key={movie.id}>
      <img src={movie.medium_cover_image} alt={movie.title} />
      <div>
        <p>
          {movie.year}년, {movie.runtime}분
        </p>
        <h3>{movie.title}</h3>
        <p>
          <img src={star} alt="별점" /> {movie.rating}
        </p>
        <ul>
          {movie.genres.map((genre, index) => (
            <li key={index}>{genre} </li>
          ))}
        </ul>
      </div>
    </List>
  );
};

export default Card;

const List = styled.li`
  width: 250px;
  height: 490px;
  display: flex;
  flex-direction: column;
  img {
    height: 370px;
  }
  div {
    display: flex;
    flex-direction: column;
    gap: 12px;
    h3 {
      color: var(--gray-900, #111827);
      font-size: 18px;

      font-weight: 700;
    }
    p:nth-child(1) {
      margin-top: 12px;
      color: #9ca3af;
      font-size: 12px;
      font-weight: 700;
    }
    p:nth-child(3) {
      color: var(--gray-900, #111827);
      font-size: 12px;
      display: flex;
      flex-direction: row;

      line-height: 12px;
      img {
        width: 12px;
        height: 12px;
        margin-right: 4px;
      }
    }
    ul {
      display: flex;
      flex-direction: row;
      li + li {
        margin-left: 8px;
      }
      li {
        color: var(--gray-400, #9ca3af);
        font-size: 12px;

        font-weight: 700;
      }
    }
  }
`;
