import { useEffect, useState } from "react";

const Weather = (position) => {
  const API_KEY = "317973f84ec67f1014ac70af4988ecfb";
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState([]);

  const getWeather = async (lat, lon) => {
    const json = await (
      await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`
      )
    ).json();
    setLocation(json);
    setLoading(false);
  };

  const getLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        getWeather(position.coords.latitude, position.coords.longitude);
      });
    } else alert("Can't find you. No weather for you.");
  };
  // 에러 상황별 코드 나타내기
  useEffect(() => {
    getLocation();
  }, []);

  // 여기 먼저 선언하고 이 상수를 사용하면 새로고침시 오류가 난다. 로딩 순서 비슷한 문제 같은데?
  // const currentTemp = Math.round(location.main.temp);
  return (
    <div>
      {loading ? (
        <div>loading...</div>
      ) : (
        <div>
          <span>{location.name}</span>
          <span>{Math.round(location.main.temp)}</span>
          <img
            src={`http://openweathermap.org/img/wn/${location.weather[0].icon}.png`}
            alt="icon"
          />
        </div>
      )}
    </div>
  );
};
export default Weather;
