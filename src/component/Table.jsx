import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";


function Table({ coins, showNA }) {
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
          {cryptocurrencyList.map((data, idx) => (
            <tr key={data.code}>
              <td>{data.name}</td>
              <td>{`1 USD = ${data.rate}`}</td>
              <td>
                {/* {showNA?"n/a" : coins[idx] ? coins[idx].toFixed(6) : "0.00000000" } */}
                {showNA
                  ? "n/a"
                  : coins[idx] !== undefined && !isNaN(coins[idx])
                  ? coins[idx].toFixed(8)
                  : "0.00000000"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
