import React from "react";
import "./main.scss";

export function Main() {
  return (
    <div className="main-content">
      <div className="sum-wrapper">
        <h3 className="sum-big-title">
          41,231,441.33<span>EUR</span>
        </h3>
        <h5 className="sum-small-title">41,231,441.33 EUR</h5>
      </div>
      <div className="profit-wrapper">
        <div className="profit-sum-item">
          <div className="profit-title-wrapper">
            Profits (7d)
            <div className="up-percent">
              +164%
              <svg
                width="7"
                height="9"
                viewBox="0 0 7 9"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M4.00091 0.452541L4.00091 8.5502C4.00091 8.66949 3.94825 8.7839 3.85452 8.86826C3.7608 8.95261 3.63368 9 3.50113 9C3.36857 9 3.24145 8.95261 3.14773 8.86826C3.054 8.7839 3.00134 8.66949 3.00134 8.5502L3.00134 0.452541C3.00134 0.333247 3.054 0.21884 3.14773 0.134485C3.24145 0.0501318 3.36857 0.00274275 3.50112 0.00274275C3.63368 0.00274274 3.7608 0.0501318 3.85452 0.134485C3.94825 0.21884 4.00091 0.333247 4.00091 0.452541Z" />
                <path d="M6.9927 3.15149C6.99319 3.24043 6.96437 3.32751 6.90989 3.40171C6.8554 3.47591 6.77769 3.53391 6.68658 3.56838C6.59548 3.60284 6.49506 3.61222 6.39804 3.59533C6.30101 3.57845 6.21172 3.53605 6.14146 3.4735L6.13841 3.47097L3.49376 1.08659L0.849575 3.47097C0.754773 3.5528 0.628116 3.59794 0.496765 3.59671C0.365415 3.59547 0.239831 3.54797 0.146947 3.46437C0.0540632 3.38078 0.00127563 3.26775 -9.47311e-05 3.14954C-0.00146509 3.03132 0.0486909 2.91733 0.139617 2.83201L3.13878 0.132793C3.23217 0.0481227 3.35909 0.000293585 3.49165 -0.000181112C3.62421 -0.000655571 3.75156 0.0462635 3.84569 0.130262L3.84874 0.132793L6.8479 2.83201C6.89421 2.87407 6.93085 2.92393 6.95569 2.97876C6.98054 3.03358 6.99312 3.09228 6.9927 3.15149Z" />
              </svg>
            </div>
          </div>
          <div className="profit-sum">
            8,541.67<span>EUR</span>
          </div>
        </div>
        <div className="profit-sum-item">
          <div className="profit-title-wrapper">Deposit in orders</div>
          <div className="profit-sum">
            24,810.11<span>EUR</span>
          </div>
        </div>
        <div className="profit-sum-item">
          <div className="profit-title-wrapper">Withdraw in progress</div>
          <div className="profit-sum">
            1.00<span>EUR</span>
          </div>
        </div>
      </div>
    </div>
  );
}
