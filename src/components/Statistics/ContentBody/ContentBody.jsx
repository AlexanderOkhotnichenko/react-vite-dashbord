import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { AppContext } from "../../../App";
import { Overview } from "../Overview";
import { Portfolio } from "../Portfolio";
import { Financials } from "../Financials";
import { Trades } from "../Trades";

export function ContentBody() {
  const { datasetTab } = useContext(AppContext);
  const [overview, setOverview] = useState([true, "overview"]);
  const [portfolio, setPortfolio] = useState([false, "portfolio"]);
  const [financials, setFinancials] = useState([false, "financials"]);
  const [trades, setTrades] = useState([false, "trades"]);

  useEffect(() => {
    if (datasetTab === undefined) return;

    setOverview([false], "overview");
    setPortfolio([false], "portfolio");
    setFinancials([false], "financials");
    setTrades([false], "trades");

    datasetTab === "overview" && setOverview([true, "overview"]);
    datasetTab === "portfolio" && setPortfolio([true, "portfolio"]);
    datasetTab === "financials" && setFinancials([true, "financials"]);
    datasetTab === "trades" && setTrades([true, "trades"]);
  }, [datasetTab]);

  return (
    <div className="content-body">
      {overview[0] ? <Overview /> : null}
      {portfolio[0] ? <Portfolio /> : null}
      {financials[0] ? <Financials /> : null}
      {trades[0] ? <Trades /> : null}
    </div>
  );
}
