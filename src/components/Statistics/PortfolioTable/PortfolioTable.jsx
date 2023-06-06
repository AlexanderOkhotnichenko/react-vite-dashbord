import React from "react";
import { PortfolioTableTr } from "../PortfolioTableTr";
import "./portfolio-table.scss";

const data = [
  {
    avatar: {
      src: "src/assets/user-1.png",
      alt: "User 1",
    },
    name: "WETH",
    text: "Wrapped Ether",
    data: {
      balance: "100.096584718",
      price: "$1,573.18",
      change: "0.67%",
      value: "$157,469.95",
      allocation: "24.91%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-2.png",
      alt: "User 2",
    },
    name: "WBTC",
    text: "Wrapped BTC",
    data: {
      balance: "5.9848912",
      price: "$22,545.48",
      change: "1.12%",
      value: "$134,932.24",
      allocation: "21.34%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-3.png",
      alt: "User 3",
    },
    name: "AAVE",
    text: "Aave Token",
    data: {
      balance: "1,039.03596051",
      price: "$77.18",
      change: "1.94%",
      value: "$80,189.31",
      allocation: "12.68%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-4.png",
      alt: "User 4",
    },
    name: "LINK",
    text: "ChainLink Token",
    data: {
      balance: "9,921.79439251",
      price: "$6.95",
      change: "0.70%",
      value: "$68,972.07",
      allocation: "10.91%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-5.png",
      alt: "User 5",
    },
    name: "CRV",
    text: "Curve DAO Token",
    data: {
      balance: "69,898.0351947",
      price: "$0.95",
      change: "2.69%",
      value: "$66,700.75",
      allocation: "10.55%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-6.png",
      alt: "User 6",
    },
    name: "1INCH",
    text: "1INCH Token",
    data: {
      balance: "75,974.0105036",
      price: "$0.53",
      change: "1.13%",
      value: "$40,116.74",
      allocation: "6.35%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-7.png",
      alt: "User 7",
    },
    name: "MANA",
    text: "Decentraland MANA",
    data: {
      balance: "52,926.8487954",
      price: "$0.61",
      change: "7.54%",
      value: "$32,547.69",
      allocation: "5.15%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-8.png",
      alt: "User 8",
    },
    name: "COMP",
    text: "Compound",
    data: {
      balance: "696.129963181",
      price: "$46.13",
      change: "2.71%",
      value: "$32,115.32",
      allocation: "5.08%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-9.png",
      alt: "User 9",
    },
    name: "OCEAN",
    text: "Ocean Token",
    data: {
      balance: "49,686.6673688",
      price: "$0.39",
      change: "-0.22%",
      value: "$19,597.61",
      allocation: "3.10%",
    },
    color: "red",
  },
  {
    avatar: {
      src: "src/assets/user-10.png",
      alt: "User 10",
    },
    name: "USDC",
    text: "USD Coin",
    data: {
      balance: "0.000",
      price: "$1.00",
      change: "-0.37%",
      value: "0.00",
      allocation: "0.00%",
    },
    color: "red",
  },
  {
    avatar: {
      src: "src/assets/user-11.png",
      alt: "User 11",
    },
    name: "YFI",
    text: "yearn.finance",
    data: {
      balance: "0.000",
      price: "$10,094.99",
      change: "1.16%",
      value: "0.00",
      allocation: "0.00%",
    },
    color: "green",
  },
  {
    avatar: {
      src: "src/assets/user-12.png",
      alt: "User 12",
    },
    name: "SNX",
    text: "Synthetix Network Token",
    data: {
      balance: "0.000",
      price: "$3.08",
      change: "-3.45%",
      value: "0.00",
      allocation: "0.00%",
    },
    color: "red",
  },
  {
    avatar: {
      src: "src/assets/user-13.png",
      alt: "User 13",
    },
    name: "SUSHI",
    text: "SushiToken",
    data: {
      balance: "0.000",
      price: "$1.23",
      change: "2.65%",
      value: "0.00",
      allocation: "0.00%",
    },
    color: "green",
  },
];

export function PortfolioTable() {
  return (
    <table className="portfolio-table">
      <thead className="portfolio-table-thead">
        <tr>
          <td>Assets</td>
          <td className="end">Balance</td>
          <td className="end">Price</td>
          <td className="end">Change 24h</td>
          <td className="end">Value</td>
          <td className="end">Allocation</td>
        </tr>
      </thead>
      <tbody className="portfolio-table-tbody">
        {data.map((object, index) => (
          <PortfolioTableTr
            key={index}
            imgSrc={object.avatar.src}
            imgAlt={object.avatar.alt}
            userName={object.name}
            userText={object.text}
            balance={object.data.balance}
            price={object.data.price}
            change={object.data.change}
            value={object.data.value}
            allocation={object.data.allocation}
            colorClassName={object.color}
          />
        ))}
      </tbody>
    </table>
  );
}
