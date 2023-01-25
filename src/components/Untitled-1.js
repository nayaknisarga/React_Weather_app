{/* import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Country = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const result = useLocation();

  fetch(`https://restcountries.com/v3.1/name/${result.state?.country}`)
    .then(function (response) {
      return response.json();
    })
    .then(function (result) {
      setApiData(result);
    })
    .catch(function (error) {
      console.log(error.message);
    });
  function abcd() {
    navigate("/Weather", { state: { capital: apiData?.[0]?.capital } });
  }

  return (
    <div className="main">
      <div className="middlepage">
        <h1 className="head"> WELCOME</h1>
        <div className="countrypage">
          <div className="subpage">
            <div className="captial">
              {"Captial"}
              <h1>{apiData?.[0]?.capital}</h1>
            </div>

            <h1>{apiData?.[0]?.population}</h1>
            <h1>
              {apiData?.[0]?.latlng?.[0]} {apiData?.[0]?.latlng?.[1]}
            </h1>
            <h1>{apiData?.[0]?.flag}</h1>
            <img
              src={`https://flagcdn.com/in.svg`}
              alt="React Logo"
              width={"100px"}
            />
            <button onClick={abcd}>Capital's weather</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Country;
///////////////////////////////////
/////////////////////////////
////////////////////  {
        apiData.length>0 ? () : <h1> no data found</h1>
    }
    ////////////////////////////////

    /////////////////////
    /////////////////
    /
     <div className="main">
        <div className="middlepage">
          <h1>
            {" "}
            <p>
              {weatherapi?.[0]?.request?.que ry}
              <img src={temp} alt="" width="30px" />
            </p>
          </h1>

          <h1>
            {" "}
            <p>
              {weatherapi?.[0]?.current?.temperture}
              <img src={temp} alt="" width="30px" />
            </p>
          </h1>
          <div className="countrypage">
            <div className="subpage">
              <div className="latlong">
                <p>
                  {" "}
                  {weatherapi?.[0]?.current?.weather_code}
                  <img src={weather} alt="" width="30px" />
                </p>
                <div className="mainone"></div>
              </div>
              <div className="population">
                <p>
                  {" "}
                  {weatherapi?.[0]?.current?.weather_icons}
                  <img src={wind} alt="" width="30px" />
                </p>
                <div className="mainone"></div>
              </div>
            </div>
            <div className="flagmain">
              <div className="flag">
                <div className="mainone">
                  <p>Trecit</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
     {apiData?.[0]?.currencies?.INR?.name}