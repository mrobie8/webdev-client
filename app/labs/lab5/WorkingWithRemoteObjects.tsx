"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function WorkingWithRemoteObjects() {
  const [assignment, setAssignment] = useState({
    id: 1,
    title: "NodeJS Assignment",
    description: "Create a NodeJS server with ExpressJS",
    due: "2021-10-10",
    completed: false,
    score: 0,
  });
  const ASSIGNMENT_API_URL = `${HTTP_SERVER}/lab5/assignment`;
  const [courseModule, setCourseModule] = useState({
    id: "M501",
    name: "RESTful Routes Deep Dive",
    description: "Map URLs to handler functions with Express",
    course: "CS4550",
  });
  const MODULE_API_URL = `${HTTP_SERVER}/lab5/module`;

  return (
    <div id="wd-working-with-objects">
      <h3 className="text-xl font-semibold">Working With Objects</h3>

      <h4 className="mt-2 font-semibold">Retrieving Objects</h4>
      <a
        id="wd-retrieve-assignments"
        className={linkClass}
        href={ASSIGNMENT_API_URL}
      >
        Get Assignment
      </a>

      <h4 className="font-semibold">Retrieving Properties</h4>
      <a
        id="wd-retrieve-assignment-title"
        className={linkClass}
        href={`${ASSIGNMENT_API_URL}/title`}
      >
        Get Title
      </a>

      <h4 className="font-semibold">Modifying Properties</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-assignment-title"
          className={linkClass}
          href={`${ASSIGNMENT_API_URL}/title/${assignment.title}`}
        >
          Update Title
        </a>
        <input
          id="wd-assignment-title"
          className={inputClass}
          value={assignment.title}
          onChange={(e) =>
            setAssignment({ ...assignment, title: e.target.value })
          }
        />
      </div>

      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-assignment-score"
          className={linkClass}
          href={`${ASSIGNMENT_API_URL}/score/${assignment.score}`}
        >
          Update Score
        </a>
        <input
          type="number"
          id="wd-assignment-score"
          className={`${inputClass} w-24`}
          value={assignment.score}
          onChange={(e) =>
            setAssignment({ ...assignment, score: Number(e.target.value) })
          }
        />
      </div>

      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-assignment-completed"
          className={linkClass}
          href={`${ASSIGNMENT_API_URL}/completed/${assignment.completed}`}
        >
          Update Completed
        </a>
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            id="wd-assignment-completed"
            checked={assignment.completed}
            onChange={(e) =>
              setAssignment({ ...assignment, completed: e.target.checked })
            }
          />
          Completed
        </label>
      </div>
      <h4 className="font-semibold">Module (On Your Own)</h4>
      <div className="mb-2 flex gap-2">
        <a id="wd-retrieve-module" className={linkClass} href={MODULE_API_URL}>
          Get Module
        </a>
        <a
          id="wd-retrieve-module-name"
          className={linkClass}
          href={`${MODULE_API_URL}/name`}
        >
          Get Module Name
        </a>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-module-name"
          className={linkClass}
          href={`${MODULE_API_URL}/name/${courseModule.name}`}
        >
          Update Module Name
        </a>
        <input
          id="wd-module-name"
          className={inputClass}
          value={courseModule.name}
          onChange={(e) =>
            setCourseModule({ ...courseModule, name: e.target.value })
          }
        />
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-module-description"
          className={linkClass}
          href={`${MODULE_API_URL}/description/${courseModule.description}`}
        >
          Update Module Description
        </a>
        <input
          id="wd-module-description"
          className={`${inputClass} w-80`}
          value={courseModule.description}
          onChange={(e) =>
            setCourseModule({ ...courseModule, description: e.target.value })
          }
        />
      </div>
      <hr className="my-4" />
    </div>
  );
}
