import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import temp from "../components/assets/temp1.svg";

function Weather() {
  const res = useLocation();
  const navigate = useNavigate();
  const [weatherapi, setWeatherapi] = useState(null);

  useEffect(() => {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${res.state?.capital}&appid=49c597681e5232841c3428134fd9d440`
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (res) {
        setWeatherapi(res);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);

  function button() {
    navigate("/Main");
  }

  return (
    <>
      <div className="main">
        <div className="middlepage">
          <div className="weathermain">
            <h1>
              <p>Welcome to {weatherapi?.name}</p>
            </h1>
          </div>
          <div className="mainheading">
            <p>
              TEMPERATURE
              <h1>
                {weatherapi?.main?.temp} <img src={temp} alt="" width="30px" />
              </h1>
            </p>
          </div>
          <div className="countrypage">
            <div className="subpage">
              <div className="mainheading">
                <p>WEATHER</p>
                {weatherapi?.weather?.[0]?.main}
              </div>
              <div className="mainheading">
                <p>WIND-SPEED</p>
                {weatherapi?.wind?.speed}
              </div>
            </div>
          </div>
          <button onClick={button}>Back</button>
        </div>
      </div>
    </>
  );
}

export default Weather;
