import React from "react";
import "./overview-table.scss";

export function OverviewTable() {
  return (
    <table className="overview-table">
      <thead className="overview-thead">
        <tr>
          <td>Year</td>
          <td>Jan</td>
          <td>Feb</td>
          <td>Mar</td>
          <td>Apr</td>
          <td>May</td>
          <td>Jun</td>
          <td>Jul</td>
          <td>Aug</td>
          <td>Sep</td>
          <td>Oct</td>
          <td>Nov</td>
          <td>Dec</td>
        </tr>
      </thead>
      <tbody className="overview-tbody">
        <tr>
          <td>2021</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td className="red">-22.44%</td>
          <td className="red">-31.16%</td>
          <td className="green">17.04%</td>
          <td className="green">26.66%</td>
          <td className="red">-10.29%</td>
          <td className="green">26.99%</td>
          <td className="red">-11.28%</td>
          <td className="red">-12.69%</td>
        </tr>
        <tr>
          <td>2022</td>
          <td className="red">-28.43%</td>
          <td className="red">-8.42%</td>
          <td className="green">18.43%</td>
          <td className="red">-17.68%</td>
          <td className="red">-39.30%</td>
          <td className="red">-39.27%</td>
          <td className="green">49.18%</td>
          <td className="red">-9.39%</td>
          <td className="red">-7.77%</td>
          <td className="green">5.86%</td>
          <td className="red">-18.06%</td>
          <td className="red">-15.86%</td>
        </tr>
        <tr>
          <td>2023</td>
          <td className="green">44.70%</td>
          <td className="red">-0.60%</td>
          <td className="red">-2.68%</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
          <td>-</td>
        </tr>
      </tbody>
    </table>
  );
}
