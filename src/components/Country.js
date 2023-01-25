import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Country = () => {
  const navigate = useNavigate();
  const [apiData, setApiData] = useState(null);
  const result = useLocation();
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/name/${result.state?.country}`)
      .then(function (response) {
        console.log(response.status);
        return response.json();
      })
      .then(function (result) {
        setApiData(result);
        console.log("data coming ", result);
      })
      .catch(function (error) {
        console.log(error.message);
      });
  }, []);
  function abcd() {
    navigate("/Weather", { state: { capital: apiData?.[0]?.capital } });
  }

  return (
    <>
      <div className="main">
        <div className="middlepage">
          <div className="mainheading">
            <div className="mainone">
              <div className="headflag">
                <h1>{apiData?.[0]?.capital}</h1>

                <img
                  src={apiData?.[0]?.flags?.png}
                  width="50px"
                  height="50px"
                />
              </div>
            </div>
          </div>

          <div className="countrypage">
            <div className="subpage">
              <div className="mainheading">
                <p>POPULATION</p>
                <div className="mainone">{apiData?.[0]?.population}</div>
              </div>
              <div className="mainheading">
                <p>LAT-LONG</p>
                <div className="mainone">
                  {apiData?.[0]?.latlng?.[0]} {apiData?.[0]?.latlng?.[1]}
                </div>
              </div>
            </div>
            <br />
            <br />
            <button onClick={abcd}>Capital's Weather</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Country;
