import React, { useContext, useRef } from "react";
import { AppContext } from "../../../App";
import { RenderTab } from "../RenderTab";
import "./content-header.scss";

export function ContentHeader() {
  const { setDatasetTab } = useContext(AppContext);
  const controlerContent = useRef();
  
  const handleClick = (event) => {
    const current = event.target;
    setDatasetTab(current.dataset.tab);
    
    controlerContent.current.childNodes.forEach((el, index) => {
      el.classList.remove("active");
      current.classList.add("active");
      controlerContent.current.classList.remove(`ac-${index}`);
      
      el.classList.contains("active") && controlerContent.current.classList.add(`ac-${index}`);
    });
  };

  return (
    <div className="content-header">
      <h1 className="content-header-title">Predictum AI performance</h1>
      <p className="content-header-text">
        Hedge fund invests in a wide range of liquid crypto assets
      </p>
      <div className="content-header-controler">
        <div className="content-header-controler-content ac-0" ref={controlerContent}>
          <RenderTab
            className="content-header-controler-content-el active"
            onClick={handleClick}
            data-tab="overview"
            text="Overview"
          />
          <RenderTab
            className="content-header-controler-content-el"
            onClick={handleClick}
            data-tab="portfolio"
            text="Portfolio"
          />
          <RenderTab
            className="content-header-controler-content-el"
            onClick={handleClick}
            data-tab="financials"
            text="Financials"
          />
          <RenderTab
            className="content-header-controler-content-el"
            onClick={handleClick}
            data-tab="trades"
            text="Trades"
          />
          {/* <div className="content-header-controler-content-el" onClick={handleClick} data-target="trades">Trades</div> */}
        </div>
        <div className="content-header-controler-line"></div>
      </div>
    </div>
  );
}
