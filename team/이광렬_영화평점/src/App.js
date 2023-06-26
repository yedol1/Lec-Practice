import React, { useEffect, useState } from "react";
import { fetchMovieData } from "api/movie";
import Card from "components/Card";
import styled from "styled-components";
import GlobalStyle from "styles/GlobalStyle";
import Select from "react-select";
import Loading from "./images/Rocket.gif";
function App() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [minimumRating, setMinimumRating] = useState(7);
  const [sortBy, setSortBy] = useState("year");
  const [orderBy, setOrderBy] = useState("desc");
  const [loading, setLoading] = useState(true);
  const [queryTerm, setQueryTerm] = useState("");
  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      height: "50px",
    }),
    valueContainer: (provided, state) => ({
      ...provided,
      height: "40px",
    }),
    singleValue: (provided, state) => ({
      ...provided,
      height: "38px",
      display: "flex",
      alignItems: "center",
    }),
  };
  const ratingOptions = [
    { value: 1, label: "⭐ 1" },
    { value: 2, label: "⭐ 2" },
    { value: 3, label: "⭐ 3" },
    { value: 4, label: "⭐ 4" },
    { value: 5, label: "⭐ 5" },
    { value: 6, label: "⭐ 6" },
    { value: 7, label: "⭐ 7" },
    { value: 8, label: "⭐ 8" },
    { value: 9, label: "⭐ 9" },
    { value: 10, label: "⭐ 10" },
  ];

  const sortByOptions = [
    { value: "year", label: "📅 Year" },
    { value: "rating", label: "👀 Rating" },
    { value: "title", label: "✨ Title" },
    { value: "download_count", label: "✅ Download Count" },
    { value: "like_count", label: "👍 Like Count" },
  ];

  const orderByOptions = [
    { value: "desc", label: "🔽" },
    { value: "asc", label: "🔼" },
  ];
  useEffect(() => {
    if (page > 0) {
      const getData = async () => {
        try {
          setLoading(true);
          const data = await fetchMovieData(page, minimumRating, sortBy, orderBy, queryTerm);
          setMovies(data.data.movies);
          setLoading(false);
        } catch (error) {
          setPage(page - 1);
          console.log(error);
        }
      };
      getData();
    } else {
      setPage(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page, minimumRating, sortBy, orderBy]);

  const handleSearch = async () => {
    try {
      setLoading(true);
      const data = await fetchMovieData(page, minimumRating, sortBy, orderBy, queryTerm);
      setMovies(data.data.movies);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const handleInputChange = (e) => {
    setQueryTerm(e.target.value);
  };

  console.log(movies);
  if (loading)
    return (
      <LoadingPage>
        <img src={Loading} alt="loading" />
      </LoadingPage>
    );

  return (
    <React.Fragment>
      <GlobalStyle />
      <Header>
        <h1>영화 검색</h1>
      </Header>
      <Main>
        <section>
          <div>
            <label htmlFor="searchInput"></label>
            <input type="text" id="searchInput" value={queryTerm} onChange={handleInputChange} placeholder="찾고자하는 키워드를 입력해주세요." />
            <button onClick={handleSearch}>
              <img src="https://img.icons8.com/ios-glyphs/30/000000/search--v1.png" alt="검색" />
            </button>
          </div>
          <div>
            <div>
              <label htmlFor="minimumRating"></label>
              <Select
                id="minimumRating"
                options={ratingOptions}
                value={ratingOptions.find((option) => option.value === minimumRating)}
                onChange={(selectedOption) => setMinimumRating(selectedOption.value)}
                styles={customStyles}
              />
            </div>
            <div>
              <label htmlFor="sortBy"></label>
              <Select
                id="sortBy"
                options={sortByOptions}
                value={sortByOptions.find((option) => option.value === sortBy)}
                onChange={(selectedOption) => setSortBy(selectedOption.value)}
                styles={customStyles}
              />
            </div>

            <div>
              <label htmlFor="orderBy"></label>
              <Select
                id="orderBy"
                options={orderByOptions}
                value={orderByOptions.find((option) => option.value === orderBy)}
                onChange={(selectedOption) => setOrderBy(selectedOption.value)}
                styles={customStyles}
              />
            </div>
          </div>
        </section>
        <section>
          {movies ? (
            <ul>
              {movies.map((movie) => (
                <Card key={movie.id} movie={movie} />
              ))}
            </ul>
          ) : (
            <div>키워드와 연관된 영화가 존재하지 않습니다.</div>
          )}
        </section>
        <Footer>
          {page > 1 && <button onClick={() => setPage((prev) => prev - 1)}>이전</button>}
          <span>{page}</span>
          <button onClick={() => setPage((prev) => prev + 1)}>다음</button>
        </Footer>
      </Main>
    </React.Fragment>
  );
}
export default App;

const Header = styled.header`
  color: #000;
  font-size: 36px;
  font-weight: 700;
  text-align: center;
  margin-top: 20px;
`;

const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  section:first-child {
    display: flex;
    flex-direction: column;
    > div:nth-of-type(1) {
      margin-top: 20px;
      display: flex;
      width: 525px;
      padding: 6px 10px;
      justify-content: space-between;
      align-items: center;
      border-radius: 6px;
      border: 2px solid var(--gray-300, #d1d5db);
      > label {
        display: none;
      }
      > input {
        width: 100%;
        height: 100%;
        border: none;
        outline: none;
        font-size: 16px;

        line-height: 24px;
      }
      > button {
        img {
          width: 16px;
          height: 16px;
          flex-shrink: 0;
        }
      }
    }
    > div:nth-of-type(2) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-top: 20px;
    }
  }
  section:nth-of-type(2) > ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 20px;
    > li {
      margin: 10px;
    }
  }
`;
const Footer = styled.footer`
  button {
    background-color: #0077ff;
    color: #ffffff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 5px;
    cursor: pointer;
  }
  span {
    font-size: 16px;
    font-weight: bold;
    color: #0077ff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    margin: 0 5px;
  }
  margin-bottom: 20px;
`;

const LoadingPage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100vh - 100px);
  img {
    width: 100px;
    height: 100px;
  }
`;
