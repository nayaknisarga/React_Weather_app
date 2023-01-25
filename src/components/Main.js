import React, { useState } from "react";
import cloud3 from "../components/assets/cloud-sun.svg";
import { useNavigate } from "react-router-dom";

const Main = () => {
  const [value, setValue] = useState("");

  const navigate = useNavigate();

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <div className="main">
        <div className="middlepage">
          <div>
            <img src={cloud3} alt="" width="100px" />
          </div>
          <h2 className="heading"> REACT WEATHER APP</h2>
          <div className="form">
            <form>
              <input
                type="text"
                placeholder="Enter your country name"
                value={value}
                onChange={handleChange}
              />
              <button
                onClick={() =>
                  navigate("/Country", { state: { country: value } })
                }
                disabled={!value}
              >
                SUBMIT
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
