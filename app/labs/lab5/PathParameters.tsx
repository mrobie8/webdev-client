"use client";

import { useState } from "react";

export default function PathParameters() {
  const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
  const [a, setA] = useState("34");
  const [b, setB] = useState("23");
  return (
    <div id="wd-path-parameters">
      <h3 className="text-xl font-semibold">Path Parameters</h3>
      <div className="my-2 flex gap-2">
        <input
          type="number"
          id="wd-path-parameter-a"
          className="w-28 rounded border border-gray-300 px-2 py-1"
          value={a}
          onChange={(e) => setA(e.target.value)}
        />
        <input
          type="number"
          id="wd-path-parameter-b"
          className="w-28 rounded border border-gray-300 px-2 py-1"
          value={b}
          onChange={(e) => setB(e.target.value)}
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <a
          id="wd-path-parameter-add"
          className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/add/${a}/${b}`}
        >
          Add {a} + {b}
        </a>
        <a
          id="wd-path-parameter-subtract"
          className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/subtract/${a}/${b}`}
        >
          Subtract {a} - {b}
        </a>
        <a
          id="wd-path-parameter-multiply"
          className="rounded bg-green-600 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/multiply/${a}/${b}`}
        >
          Multiply {a} × {b}
        </a>
        <a
          id="wd-path-parameter-divide"
          className="rounded bg-orange-400 px-3 py-1.5 text-sm text-white"
          href={`${HTTP_SERVER}/lab5/divide/${a}/${b}`}
        >
          Divide {a} ÷ {b}
        </a>
      </div>
      <hr className="my-4" />
    </div>
  );
}
