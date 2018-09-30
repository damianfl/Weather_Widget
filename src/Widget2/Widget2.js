import React from "react";
import "./Widget2.scss";

function Widget2(props) {
  return (
    <div className="widget2 widget--item">
      <div className="header">
        <p className="header--item header--item__one">
          {props.citysel}, {props.country}
        </p>
        <p className="header--item header--item__two"> {props.weather}</p>
      </div>
      <div className="body">
        <p>{props.temp}</p>
      </div>
      <div className="footer">
        {props.icon}
        <div className="footer--item--text">
          <p>OpenWeatherAPI</p>
        </div>
      </div>
    </div>
  );
}

export default Widget2;
