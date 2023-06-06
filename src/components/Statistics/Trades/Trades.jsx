import React from "react";
import { Content } from "../../Content";
import { TradesItem } from "../TradesItem";
import "./trades.scss";

export function Trades() {
  return (
    <Content className="trades">
      <Content className="trades-content grid">
        <Content className="trades-content-left">
          <a href="#" className="trades-content-left-link">
            14 Feb 2023 15:44
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.89063 3H2.39063C1.9928 3 1.61127 3.15804 1.32996 3.43934C1.04866 3.72064 0.890625 4.10218 0.890625 4.5V11.5C0.890625 11.8978 1.04866 12.2794 1.32996 12.5607C1.61127 12.842 1.9928 13 2.39063 13H9.39063C9.78845 13 10.17 12.842 10.4513 12.5607C10.7326 12.2794 10.8906 11.8978 10.8906 11.5V6M3.89063 10L12.8906 1M12.8906 1H9.39063M12.8906 1V4.5"
                stroke="#9CA3AF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <h4 className="trades-content-left-title">Swap</h4>
        </Content>
        <Content className="trades-content-right">
          <TradesItem
            title="Protocol"
            text="ParaSwap V5"
            imgSrc="src/assets/user-14.png"
          />
          <TradesItem
            title="Outgoing Asset"
            text="22,242.1158 USDC"
            price="$22,300.21"
            imgSrc="src/assets/user-10.png"
          />
          <TradesItem
            title="Incoming Asset"
            text="49,979.8938 OCEAN"
            price="$21,965.21"
            imgSrc="src/assets/user-9.png"
          />
        </Content>
      </Content>
      <Content className="trades-content grid">
        <Content className="trades-content-left">
          <a href="#" className="trades-content-left-link">
            14 Feb 2023 15:44
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.89063 3H2.39063C1.9928 3 1.61127 3.15804 1.32996 3.43934C1.04866 3.72064 0.890625 4.10218 0.890625 4.5V11.5C0.890625 11.8978 1.04866 12.2794 1.32996 12.5607C1.61127 12.842 1.9928 13 2.39063 13H9.39063C9.78845 13 10.17 12.842 10.4513 12.5607C10.7326 12.2794 10.8906 11.8978 10.8906 11.5V6M3.89063 10L12.8906 1M12.8906 1H9.39063M12.8906 1V4.5"
                stroke="#9CA3AF"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <h4 className="trades-content-left-title">Swap</h4>
        </Content>
        <Content className="trades-content-right">
          <TradesItem
            title="Protocol"
            text="ParaSwap V5"
            imgSrc="src/assets/user-14.png"
          />
          <TradesItem
            title="Outgoing Asset"
            text="5,000 USDC"
            price="$5,021.57"
            imgSrc="src/assets/user-10.png"
          />
          <TradesItem
            title="Incoming Asset"
            text="7,620.4164 MANA"
            price="$4,902.90"
            imgSrc="src/assets/user-15.png"
          />
        </Content>
      </Content>
    </Content>
  );
}
