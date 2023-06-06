import React from "react";

export function PortfolioTableTr({ imgSrc, imgAlt, userName, userText, balance, price, change, value, allocation, colorClassName }) {
  return (
    <tr>
      <td className="padding">
        <div className="table-td-wrapper">
          <img src={imgSrc} alt={imgAlt} />
          <div className="table-td-text">
            <h5>{userName}</h5>
            <span>{userText}</span>
          </div>
        </div>
      </td>
      <td>{balance}</td>
      <td>{price}</td>
      <td className={colorClassName}>{change}%</td>
      <td>{value}</td>
      <td>{allocation}%</td>
    </tr>
  );
}
