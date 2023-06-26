import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// useParams => 동적 url부분(:id)을 가져옴

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
        <div>
          <img
            src={details.background_image_original}
            alt="movie_details_background"
          />
          <h1>{details.title}</h1>
          <p>{details.rating}</p>
          <ul>
            {details.genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
          <div>{details.description_intro}</div>
        </div>
      )}
    </div>
  );
};
export default Detail;
