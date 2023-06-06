import React from "react";
import { Content } from "../../Content";
import { PortfolioTable } from "../PortfolioTable";
import "./portfolio.scss";

export function Portfolio() {
  return (
    <Content className="portfolio">
      <PortfolioTable />
    </Content>
  );
}
