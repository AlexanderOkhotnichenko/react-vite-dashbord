import React from "react";
import "./financials-card.scss";

export function FinancialsCard({title, text, colorClassName}) {
  return (
    <div className="financials-card">
      <h4 className="financials-card-title">{title}</h4>
      <div className={`financials-card-info ${colorClassName}`}>{text}</div>
    </div>
  );
}
