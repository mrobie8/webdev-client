"use client";
import { useEffect, useState } from "react";
import * as client from "./client";

const inputClass =
  "mb-2 block w-full max-w-md rounded border border-gray-300 px-2 py-1";

export default function WorkingWithRemoteObjectsAsynchronously() {
  const [assignment, setAssignment] = useState<Partial<client.Assignment>>({});

  const fetchAssignment = async () => {
    setAssignment(await client.fetchAssignment());
  };
  const updateTitle = async () => {
    setAssignment(await client.updateTitle(assignment.title ?? ""));
  };
  useEffect(() => {
    fetchAssignment();
  }, []);

  return (
    <div id="wd-asynchronous-objects">
      <h3 className="text-xl font-semibold">
        Working with Objects Asynchronously
      </h3>
      <h4 className="mt-2 font-semibold">Assignment</h4>
      <input
        id="wd-async-assignment-title"
        className={inputClass}
        value={assignment.title ?? ""}
        onChange={(e) =>
          setAssignment({ ...assignment, title: e.target.value })
        }
      />
      <textarea
        id="wd-async-assignment-description"
        className={inputClass}
        value={assignment.description ?? ""}
        onChange={(e) =>
          setAssignment({ ...assignment, description: e.target.value })
        }
      />
      <input
        type="date"
        id="wd-async-assignment-due"
        className={inputClass}
        value={assignment.due ?? ""}
        onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
      />
      <label className="mb-2 flex items-center gap-1">
        <input
          type="checkbox"
          id="wd-async-assignment-completed"
          checked={assignment.completed ?? false}
          onChange={(e) =>
            setAssignment({ ...assignment, completed: e.target.checked })
          }
        />
        Completed
      </label>
      <button
        type="button"
        id="wd-async-update-title"
        className="rounded bg-blue-600 px-3 py-1.5 text-sm text-white"
        onClick={updateTitle}
      >
        Update Title
      </button>
      <pre className="mt-2 rounded bg-gray-100 p-2 text-sm">
        {JSON.stringify(assignment, null, 2)}
      </pre>
      <hr className="my-4" />
    </div>
  );
}
