import React from "react";
import "./Widget4.scss";

function Widget4(props) {
  console.log(props.temp_min);
  console.log(props.temp_max);
  return (
    <div className="widget4 widget--item">
      <div className="left">
        <div className="left_inner">
          <p>
            {props.citysel}, {props.country}
          </p>
          <p>{props.weather}</p>
        </div>
      </div>
      <div className="middle">
        <div>{props.icon}</div>
      </div>
      <div className="right">
        <div className="right--item right--item--first">
          <p>{props.temp_min}&#8451;</p>
        </div>
        <div className="right--item right--item--second">
          <p>{props.temp_max}&#8451;</p>
        </div>
      </div>
    </div>
  );
}

export default Widget4;
