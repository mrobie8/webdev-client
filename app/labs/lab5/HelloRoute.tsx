"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

export default function HelloRoute() {
  const [hello, setHello] = useState<{ message?: string }>({});
  useEffect(() => {
    client.fetchHello().then(setHello);
  }, []);
  return (
    <div id="wd-hello-route">
      <h3 className="text-xl font-semibold">
        GET /api/lab5/hello (Next.js Route Handler)
      </h3>
      <pre className="mt-2 rounded bg-gray-100 p-2 text-sm">
        {JSON.stringify(hello, null, 2)}
      </pre>
      <hr className="my-4" />
    </div>
  );
}
