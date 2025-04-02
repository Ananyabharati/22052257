import React, { useState } from "react";
import axios from "axios";

const API_URLS = {
    p: process.env.REACT_APP_PRIME_API,
    f: process.env.REACT_APP_FIBO_API,
    e: process.env.REACT_APP_EVEN_API,
    r: process.env.REACT_APP_RANDOM_API,
};

const NumberFetcher = () => {
  const [numberType, setNumberType] = useState("p");
  const [numbers, setNumbers] = useState([]);
  const [average, setAverage] = useState(null);

  const fetchNumbers = async () => {
    try {
      const response = await axios.get(API_URLS[numberType], { timeout: 500 });
      if (response.data.numbers) {
        const uniqueNumbers = [...new Set([...numbers, ...response.data.numbers])];
        if (uniqueNumbers.length > 10) {
          uniqueNumbers.splice(0, uniqueNumbers.length - 10);
        }
        setNumbers(uniqueNumbers);
        setAverage(
          uniqueNumbers.reduce((sum, num) => sum + num, 0) / uniqueNumbers.length
        );
      }
    } catch (error) {
      console.error("Error fetching numbers:", error);
    }
  };

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Average Calculator</h2>
      <select onChange={(e) => setNumberType(e.target.value)} value={numberType}>
        <option value="p">Prime</option>
        <option value="f">Fibonacci</option>
        <option value="e">Even</option>
        <option value="r">Random</option>
      </select>
      <button onClick={fetchNumbers} style={{ marginLeft: "10px" }}>
        Fetch Numbers
      </button>

      <h3>Numbers: {numbers.join(", ")}</h3>
      <h3>Average: {average !== null ? average.toFixed(2) : "N/A"}</h3>
    </div>
  );
};

export default NumberFetcher;
