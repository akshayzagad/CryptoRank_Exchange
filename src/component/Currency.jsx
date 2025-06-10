import React, { useState } from "react";
import Table from "./Table";
import { cryptocurrencyList } from "../cryptocurrency-list"; 
import { useEffect } from "react";

function Main() {
  const [amount, setAmount] = useState('');

  const [coins, setCoins] = useState([]);

  const [exchangeRate, setExchangeRate] = useState(
    cryptocurrencyList.map((data) => data.rate)
  );

  const [touch, setTouch] = useState(false);

  function handleAmount(e) {
    if (!touch) setTouch(true);
    setAmount(e.target.value);
  }

  const BALANCE = 1000; // or 17042.67 if you want to match the UI

  let errorMessage = "";

  if (touch) {
    if (amount === "") {
      errorMessage = "Amount cannot be empty";
    } else if (amount < 0.01) {
      errorMessage = "Amount cannot be less than $0.01";
    } else if (amount > BALANCE) {
      errorMessage = "Amount cannot exceed the available balance";
    }
  }

  useEffect(() => {
    // Convert amount to number to avoid string multiplication issues
    const amt = parseFloat(amount) || 0;
    const noOfCoins = exchangeRate.map((rate) => amt / rate);
    setCoins(noOfCoins);
  }, [amount, exchangeRate]);

  return (
    <div className="layout-column align-items-center mx-auto">
      <h1>CryptoRank Exchange</h1>
      <section>
        <div className="card-text layout-column align-items-center mt-12 px-8 flex text-center">
          <label>
            I want to exchange ${" "}
            <input
              className="w-10"
              data-testid="amount-input"
              required
              type="number"
              placeholder="USD"
              value={amount}
              onChange={handleAmount}
            />
            {amount}
            of my $<span>17042.67</span>:
          </label>
          {touch && errorMessage && (
            <p
              data-testid="error"
              className="form-hint error-text mt-3 pl-0 ml-0"
            >
              {errorMessage}
            </p>
          )}
          {/* The errors can be Amount cannot be empty /be less than $0.01/exceed the available balance */}
        </div>
      </section>
      <Table coins={coins} showNA={errorMessage} />
    </div>
  );
}

export default Main;
