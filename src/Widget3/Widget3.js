import React from "react";
import "./Widget3.scss";

function Widget3(props) {
  return (
    <div className="widget3">
      <div className="left">
        <div className="left--inner">
          <p>{props.citysel},</p>
          <p>{props.country}</p>
        </div>
      </div>
      <div className="middle">{props.icon}</div>
      <div className="right">
        <p>
          {props.temp}
          <span>&#8451;</span>
        </p>
      </div>
    </div>
  );
}
export default Widget3;
