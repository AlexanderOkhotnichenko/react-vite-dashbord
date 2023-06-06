import React, { useContext, useState } from "react";
import { Navigation } from "./components/Panel/Navigation";
import { Content } from "./components/Content";
import { RenderElement } from "./components/Panel/RenderElement";
import { Button } from "./components/Button";
import { Main } from "./components/Panel/Main";
import { Account } from "./components/Panel/Account";
import { Balance } from "./components/Panel/Balance";
import { AppContext } from "./App";
import "./styles/panel.scss";
import "./styles/description-panel-box.scss";

export function Panel() {
  const { openPanel, setOpenPanel } = useContext(AppContext);
  const [main, setMain] = useState([true, "main"]);
  const [account, setAccount] = useState([false, "account"]);
  const [balance, setBalance] = useState([false, "balance"]);

  const onRenderContentHandle = (event) => {
    const data = event.target.dataset.target;

    if (data === undefined) return;

    setMain(false, "main");
    setAccount(false, "account");
    setBalance([false, "balance"]);

    data === "main" && setMain([true, "main"]);
    data === "account" && setAccount([true, "account"]);
    data === "balance" && setBalance([true, "balance"]);
  };

  const toggleBurger = () => setOpenPanel(false);

  return (
    <div className={`panel ${openPanel ? 'is-open' : ''}`}>
      <div className="description-panel-box">
        <Content className="controller-wrapper" onClick={onRenderContentHandle}>
          <RenderElement
            className="controller-content"
            data="main"
            text="Main"
          />
          <RenderElement
            className="controller-content"
            data="account"
            text="Account"
          />
          <RenderElement
            className="controller-content"
            data="balance"
            text="Balance"
          />
        </Content>
        <div className={`header-burger-menu panel-burder-menu ${openPanel ? 'active' : ''}`} onClick={toggleBurger}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        {main[0] ? <Main /> : null}
        {account[0] ? <Account /> : null}
        {balance[0] ? <Balance /> : null}
        <Content className="button-wrapper">
          <Button className="button green">Deposit</Button>
          <Button className="button red">Withdraw</Button>
        </Content>
      </div>
      <Navigation />
    </div>
  );
}
