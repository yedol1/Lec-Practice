import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// useParams => 동적 url부분(:id)을 가져옴
import styled from "styled-components";

const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  > img {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    right: 0px;
    bottom: 0px;
    z-index: -1;
    opacity: 80%;
  }
`;
const DetailInfo = styled.div`
  display: flex;
  background-color: white;
  width: 70%;
  height: 500px;
  > div {
    display: flex;
    flex-direction: column;
    padding: 20px;

    background-color: black;
    color: white;

    > h1 {
      font-size: 32px;
    }
  }
`;
const DetailDes = styled.div`
  background-color: whitesmoke;
  color: black;
  overflow: scroll;
  margin-top: 20px;
  padding: 20px;
  height: 70%;
  width: 90%;
`;
const Detail = () => {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const getDetails = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setDetails(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getDetails();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <DetailsWrapper>
          <img
            src={details.background_image_original}
            alt="movie_details_background"
          />
          <DetailInfo>
            <img
              src={details.medium_cover_image}
              alt="movie_details_background"
            />
            <div>
              <div>
                <h1>{details.title}</h1>
                <p>{details.rating}</p>
                <ul>
                  {details.genres.map((g) => (
                    <li key={g}>{g}</li>
                  ))}
                </ul>
              </div>
              <DetailDes>{details.description_intro}</DetailDes>
            </div>
          </DetailInfo>
        </DetailsWrapper>
      )}
    </div>
  );
};
export default Detail;
