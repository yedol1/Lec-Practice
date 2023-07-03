import { useEffect, useState } from "react";

const { TEST_WEATHER_API_KEY } = import.meta.env;

const Weather = () => {
  const [temp, setTemp] = useState(null);
  const [imgSrc, setImgSrc] = useState(null);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    if ("geolocation" in navigator) {
      // console.log("위치정보 사용 가능");
      setIsLoading(true);
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        getWeather({ latitude, longitude });
      });
    } else {
      // console.log("위치정보 사용 불가능");
    }
  }, []);

  const getWeather = async ({ latitude, longitude }) => {
    try {
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${TEST_WEATHER_API_KEY}&units=metric`
      );
      const json = await res.json();
      const { weather, main } = json;
      setImgSrc(`http://openweathermap.org/img/wn/${weather[0].icon}@2x.png`);
      setTemp(main.temp);
    } catch (error) {
      setIsError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="weather">
      {isLoading ? null : (
        <div className="wrap-weather">
          <img src={imgSrc} alt="weather-icon" />
          <span>{isError ? "fail to load weather" : temp + "°C"}</span>
        </div>
      )}
    </section>
  );
};

export default Weather;
