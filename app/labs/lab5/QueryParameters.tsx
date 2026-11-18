"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;

export default function QueryParameters() {
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  const CALC = `${HTTP_SERVER}/lab5/calculator`;
  return (
    <div id="wd-query-parameters">
      <h3 className="text-xl font-semibold">Query Parameters</h3>
      <div className="my-2 flex gap-2">
        <input
          type="number"
          id="wd-query-parameter-a"
          className="w-28 rounded border border-gray-300 px-2 py-1"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          id="wd-query-parameter-b"
          className="w-28 rounded border border-gray-300 px-2 py-1"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-query-parameter-add"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${CALC}?operation=add&a=${a}&b=${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-query-parameter-subtract"
          className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
          href={`${CALC}?operation=subtract&a=${a}&b=${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-query-parameter-multiply"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          href={`${CALC}?operation=multiply&a=${a}&b=${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-query-parameter-divide"
          className="rounded bg-orange-400 px-3 py-1.5 text-sm text-white"
          href={`${CALC}?operation=divide&a=${a}&b=${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr className="my-4" />
    </div>
  );
}
