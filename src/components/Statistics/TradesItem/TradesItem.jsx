import React from "react";
import "./trades-item.scss";

export function TradesItem({ title, text, price, imgSrc }) {
  return (
    <div className="trades-content-right-box">
      <span>{title}</span>
      <div className="trades-content-right-box-flex">
        <h4>
          {text}
          <br />
          <span>{price}</span>
        </h4>
        <img src={imgSrc} alt="User" />
      </div>
    </div>
  );
}
