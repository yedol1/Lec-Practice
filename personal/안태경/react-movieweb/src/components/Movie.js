import { Link } from "react-router-dom";
import styled from "styled-components";

const MovieWrapper = styled.div`
  box-sizing: border-box;
  background-color: aqua;
  border: 1px solid black;
  border-radius: 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  padding: 20px;
  width: 350px;
  height: 500px;
  ul {
    display: flex;
  }

  p {
    height: 50px;
    width: 100%;
    overflow: hidden;
  }
`;

// Home으로 부터 오는 props
const Movie = ({ id, coverImg, title, summary, genres }) => {
  return (
    <MovieWrapper>
      <img src={coverImg} alt={title} />
      <h2>
        <Link to={`/movie/${id}`}>{title}</Link>
      </h2>
      <ul>
        {genres.map((g) => (
          <li key={g}>{g}</li>
        ))}
      </ul>
      <p>{summary}</p>
    </MovieWrapper>
  );
};
export default Movie;
