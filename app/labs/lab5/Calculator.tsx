"use client";
import { useState } from "react";

const OPERATIONS = [
  { value: "add", symbol: "+" },
  { value: "subtract", symbol: "−" },
  { value: "multiply", symbol: "×" },
  { value: "divide", symbol: "÷" },
  { value: "power", symbol: "^ (unsupported)" }, // ON YOUR OWN — tests the 400 path
];

const inputClass = "w-28 rounded border border-gray-300 px-2 py-1";

export default function CalculatorNextWebApiClient() {
  const [a, setA] = useState("3");
  const [b, setB] = useState("5");
  const [operation, setOperation] = useState("add");
  const [result, setResult] = useState("");
  const [error, setError] = useState("");

  const calculate = async (op: string) => {
    setError("");
    setResult("");
    const params = new URLSearchParams({ a, b, operation: op });
    const response = await fetch(`/api/lab5/calculator?${params}`);
    const data = await response.json();
    // ON YOUR OWN — a 400 still returns JSON, so read data.error instead of throwing
    if (!response.ok) {
      setError(data.error);
      return;
    }
    const symbol = OPERATIONS.find((o) => o.value === data.operation)?.symbol;
    setResult(`${data.a} ${symbol} ${data.b} = ${data.result}`);
  };

  return (
    <div id="wd-calculator-next-api">
      <h3 className="text-xl font-semibold">Calculator (Next.js Web API)</h3>
      <div className="my-2 flex flex-wrap items-center gap-2">
        <label htmlFor="wd-calc-a">A:</label>
        <input
          id="wd-calc-a"
          type="number"
          className={inputClass}
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <label htmlFor="wd-calc-b">B:</label>
        <input
          id="wd-calc-b"
          type="number"
          className={inputClass}
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
        <label htmlFor="wd-calc-operation">Operation:</label>
        <select
          id="wd-calc-operation"
          className="rounded border border-gray-300 px-2 py-1"
          value={operation}
          onChange={(e) => {
            setOperation(e.target.value);
            calculate(e.target.value);
          }}
        >
          {OPERATIONS.map((o) => (
            <option key={o.value} value={o.value}>
              {o.symbol}
            </option>
          ))}
        </select>
        <button
          type="button"
          id="wd-calc-button"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          onClick={() => calculate(operation)}
        >
          Calculate
        </button>
      </div>
      <p>{result}</p>
      {error && (
        <p
          id="wd-calc-error"
          className="mt-2 rounded bg-red-100 px-3 py-2 text-red-800"
        >
          {error}
        </p>
      )}
      <hr className="my-4" />
    </div>
  );
}
