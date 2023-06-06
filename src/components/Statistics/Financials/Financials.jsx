import React from "react";
import { Content } from "../../Content";
import { FinancialsCard } from "../FinancialsCard/FinancialsCard";
import "./financials.scss";

export function Financials() {
  return (
    <Content className="financials">
      <Content className="financials-content">
        <h3 className="financials-content-title">Return metrics</h3>
        <Content className="financials-grid layout-1">
          <FinancialsCard
            title="Return Month-to-Date"
            text="-2.68%"
            colorClassName="red"
          />
          <FinancialsCard
            title="Return Quarter-to-Date"
            text="39.99%"
            colorClassName="green"
          />
          <FinancialsCard
            title="Return Year-to-Date"
            text="39.99%"
            colorClassName="green"
          />
          <FinancialsCard
            title="Return Inception-to-Date"
            text="-78.96%"
            colorClassName="red"
          />
          <FinancialsCard
            title="Average Month"
            text="-3.76%"
            colorClassName="red"
          />
          <FinancialsCard
            title="Best Month"
            text="49.18%"
            colorClassName="red"
          />
          <FinancialsCard
            title="Worst Month"
            text="-39.30%"
            colorClassName="red"
          />
          <FinancialsCard
            title="Positive Months"
            text="7 of 23 months"
            colorClassName="white"
          />
          <FinancialsCard
            title="Length of Track Record"
            text="23 months"
            colorClassName="white"
          />
        </Content>
      </Content>
      <Content className="financials-content">
        <h3 className="financials-content-title">Risk metrics (Trailing 30 days)</h3>
        <Content className="financials-grid layout-2">
          <FinancialsCard
            title="Annualised Volatility"
            text="90.91%"
            colorClassName="white"
          />
          <FinancialsCard
            title="Sharpe Ratio"
            text="-0.27"
            colorClassName="red"
          />
        </Content>
      </Content>
    </Content>
  );
}
