import React from "react";
import { cryptocurrencyList } from "../cryptocurrency-list";


function Table({ amount, error, cryptocurrencyList }) {
  const getCoinAmount = (rate) => {
    if (amount === "") return "0.00000000";
    const value = parseFloat(amount);
    if (!error && value >= 0.01) {
      return (value * rate).toFixed(8);
    }
    return error === "Amount cannot be empty" ? "0.00000000" : "n/a";
  };

  return (
    <table className="w-full border border-gray-300 mt-4">
      <thead>
        <tr className="bg-gray-100">
          <th className="p-2 text-left">Cryptocurrency</th>
          <th className="p-2 text-left">Exchange Rate</th>
          <th className="p-2 text-left">Number of Coins</th>
        </tr>
      </thead>
      <tbody>
        {cryptocurrencyList.map((crypto) => (
          <tr key={crypto.code} className="border-t">
            <td className="p-2">{crypto.name}</td>
            <td className="p-2">{crypto.rate}</td>
            <td className="p-2">{getCoinAmount(crypto.rate)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
