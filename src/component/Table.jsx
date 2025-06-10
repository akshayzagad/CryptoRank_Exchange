import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";


function Table({ coins, hasError }) {
  return (
    <div className="card card-text mt-10 mx-4">
      <table className="mb-0">
        <thead>
          <tr>
            <th>Cryptocurrency</th>
            <th>Exchange Rate</th>
            <th>Number of Coins</th>
          </tr>
        </thead>
        <tbody data-testid="exchange-data">
          {cryptocurrencyList.map((currency) => {
            return (
              <tr key={currency.code}>
                <td>{currency.name}</td>
                <td>
                  1 USD ={" "}
                  {coins === ""
                    ? Number(0.0).toFixed(8)
                    : `${currency.rate} ${currency.code}`}{" "}
                </td>
                <td>
                  {hasError
                    ? "n/a"
                    : coins === ""
                    ? "0.00000000"
                    : Number((coins * currency.rate).toFixed(8))}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
