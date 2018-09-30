import React, { Component } from "react";
import "./Widget1.scss";

function Widget1(props) {
  return (
    <div className="widget1 widget--item">
      {/* HEADER */}

      <div className="header">
        <div className="header--item__one">
          <div className="header--item__one--inner">
            <p>{props.citysel}</p>
            <p>
              {props.country}, {props.weather}
            </p>
          </div>
        </div>
        <div className="header--item__two">{props.icon}</div>
      </div>

      {/* MAIN  */}

      <div className="main">
        <div className="main--item__one">
          <p>
            {props.temp}
            &#8451;
          </p>
        </div>
        <div className="main--item__two">
          <p className="details">Details:</p>
          <br />
          <p>
            <span>temp:</span>{" "}
            <span>
              {props.temp}
              &#8451;
            </span>
          </p>
          <p>
            <span>wind:</span> <span>{props.wind} m/s</span>
          </p>
          <p>
            <span>Humidity:</span> <span>{props.humidity}%</span>
          </p>
          <p>
            <span>Pressure:</span>
            <span> {props.pressure} hPa</span>
          </p>
        </div>
      </div>
      {/*USER INPUT */}
      <div className="userInput">
        <input value={props.city} onChange={props.handler} type="text" />
        <button onClick={props.fetch} type="submit">
          Search
        </button>
      </div>
    </div>
  );
}

export default Widget1;
