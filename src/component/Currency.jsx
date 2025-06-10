import React, { useState } from "react";
import Table from "./Table";
import { cryptocurrencyList } from "../cryptocurrency-list"; 
import { useEffect } from "react";

const availableBalance = 5000;

function Main() {
  const [amount, setAmount] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);

    if (value === "") {
      setError("Amount cannot be empty");
    } else if (isNaN(value) || Number(value) < 0.01) {
      setError("Amount must be at least $0.01");
    } else if (Number(value) > availableBalance) {
      setError("Amount cannot exceed the available balance");
    } else {
      setError("");
    }
  };

  return (
    <div className="p-6 max-w-xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">CryptoRank Exchange</h1>
      <input
        type="text"
        value={amount}
        onChange={handleChange}
        placeholder="Enter amount in USD"
        className="border border-gray-300 p-2 rounded w-full mb-2"
      />
      {error && <div className="text-red-600 mb-2">{error}</div>}
      <Table
        amount={amount}
        error={error}
        cryptocurrencyList={cryptocurrencyList}
      />
    </div>
  );
}

export default Main;
