import React from "react";
import "./card.scss";

export function OverviewCard({ colorClassName, title, text, textSpan, children }) {
  return (
    <div className={`content-card ${colorClassName}`}>
      <h4 className="content-card-title">{title}</h4>
      <div className="content-card-box">
        {children}
        <h2 className={`content-card-text ${colorClassName}`}>
          {text}
          <span>{textSpan}</span>
        </h2>
      </div>
    </div>
  );
}
