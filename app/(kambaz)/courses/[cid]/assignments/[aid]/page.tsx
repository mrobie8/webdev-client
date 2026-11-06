"use client";

import { useState } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import {
  useAssignmentsStore,
  type Assignment,
} from "../../../../store/assignmentsStore";

export default function AssignmentEditor() {
  const { cid, aid } = useParams<{ cid: string; aid: string }>();
  const router = useRouter();
  const existing = useAssignmentsStore((state) =>
    state.assignments.find((a) => a._id === aid),
  );
  const addAssignment = useAssignmentsStore((state) => state.addAssignment);
  const updateAssignment = useAssignmentsStore((state) => state.updateAssignment);
  const isNew = aid === "new";

  const [assignment, setAssignment] = useState<Assignment>(
    existing ?? {
      _id: "",
      title: "New Assignment",
      course: cid,
      description: "",
      points: 100,
      due: "",
      available: "",
      until: "",
    },
  );

  const save = () => {
    if (isNew) addAssignment({ ...assignment, course: cid });
    else updateAssignment(assignment);
    router.push(`/courses/${cid}/assignments`);
  };

  if (!isNew && !existing) {
    return <p className="p-4">Assignment not found.</p>;
  }

  const field =
    "block w-full rounded border border-neutral-300 px-3 py-1.5 text-sm";
  const topLabel = "mb-1 block text-sm font-semibold";
  const row = "mb-5 flex items-center gap-4";
  const sideLabel = "w-[160px] shrink-0 text-right text-sm";
  return (
    <div id="wd-assignments-editor" className="max-w-2xl p-4">
      <div className="mb-5">
        <label htmlFor="wd-name" className={topLabel}>
          Assignment Name
        </label>
        <input
          id="wd-name"
          value={assignment.title}
          onChange={(e) => setAssignment({ ...assignment, title: e.target.value })}
          className={field}
        />
        <p id="wd-assignment-id" className="mt-1 text-sm text-neutral-500">
          Assignment id: {aid}
        </p>
      </div>
      <div className="mb-5">
        <label htmlFor="wd-description" className={topLabel}>
          Description
        </label>
        <textarea
          id="wd-description"
          rows={8}
          className={field}
          value={assignment.description}
          onChange={(e) =>
            setAssignment({ ...assignment, description: e.target.value })
          }
        />
      </div>
      <div className={row}>
        <label htmlFor="wd-points" className={sideLabel}>
          Points
        </label>
        <div className="flex-1">
          <input
            id="wd-points"
            type="number"
            value={assignment.points}
            onChange={(e) =>
              setAssignment({ ...assignment, points: Number(e.target.value) })
            }
            className={field}
          />
        </div>
      </div>
      <div className={row}>
        <label htmlFor="wd-group" className={sideLabel}>
          Assignment Group
        </label>
        <div className="flex-1">
          <select id="wd-group" defaultValue="ASSIGNMENTS" className={field}>
            <option value="ASSIGNMENTS">ASSIGNMENTS</option>
            <option value="QUIZZES">QUIZZES</option>
            <option value="EXAMS">EXAMS</option>
            <option value="PROJECT">PROJECT</option>
          </select>
        </div>
      </div>
      <div className={row}>
        <label htmlFor="wd-display-grade-as" className={sideLabel}>
          Display Grade as
        </label>
        <div className="flex-1">
          <select
            id="wd-display-grade-as"
            defaultValue="Percentage"
            className={field}
          >
            <option value="Percentage">Percentage</option>
            <option value="Points">Points</option>
            <option value="Complete/Incomplete">Complete/Incomplete</option>
          </select>
        </div>
      </div>
      <div className="mb-5 flex items-start gap-4">
        <label htmlFor="wd-submission-type" className={`${sideLabel} pt-3`}>
          Submission Type
        </label>
        <div className="flex-1 rounded border border-neutral-300 p-3">
          <select
            id="wd-submission-type"
            defaultValue="Online"
            className={`${field} mb-3`}
          >
            <option value="Online">Online</option>
            <option value="On Paper">On Paper</option>
            <option value="No Submission">No Submission</option>
          </select>
          <div className="mb-3 text-sm font-semibold">Online Entry Options</div>
          <div className="mb-3 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-text-entry" />
            <label htmlFor="wd-text-entry">Text Entry</label>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-website-url" />
            <label htmlFor="wd-website-url">Website URL</label>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-media-recordings" />
            <label htmlFor="wd-media-recordings">Media Recordings</label>
          </div>
          <div className="mb-3 flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-student-annotation" />
            <label htmlFor="wd-student-annotation">Student Annotation</label>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <input type="checkbox" id="wd-file-upload" />
            <label htmlFor="wd-file-upload">File Upload</label>
          </div>
        </div>
      </div>
      <div className="mb-3 flex items-start gap-4">
        <span className={`${sideLabel} pt-3`}>Assign</span>
        <div className="flex-1 rounded border border-neutral-300 p-3">
          <div className="mb-4">
            <label htmlFor="wd-assign-to" className={topLabel}>
              Assign to
            </label>
            <input
              id="wd-assign-to"
              defaultValue="Everyone"
              className={field}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="wd-due-date" className={topLabel}>
              Due
            </label>
            <input
              id="wd-due-date"
              type="date"
              value={assignment.due}
              onChange={(e) => setAssignment({ ...assignment, due: e.target.value })}
              className={field}
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="wd-available-from" className={topLabel}>
                Available from
              </label>
              <input
                id="wd-available-from"
                type="date"
                value={assignment.available}
                onChange={(e) =>
                  setAssignment({ ...assignment, available: e.target.value })
                }
                className={field}
              />
            </div>
            <div>
              <label htmlFor="wd-available-until" className={topLabel}>
                Until
              </label>
              <input
                id="wd-available-until"
                type="date"
                value={assignment.until ?? ""}
                onChange={(e) =>
                  setAssignment({ ...assignment, until: e.target.value })
                }
                className={field}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <label htmlFor="wd-ai-editor-notes" className={topLabel}>
          Sample notes
        </label>
        <textarea id="wd-ai-editor-notes" rows={4} className={field} />
      </div>
      <hr className="mt-6 mb-2 border-0 border-t border-neutral-300" />
      <div className="flex justify-end gap-2">
        <Link
          href={`/courses/${cid}/assignments`}
          id="wd-cancel"
          className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm text-black no-underline"
        >
          Cancel
        </Link>
        <button
          type="button"
          id="wd-save"
          onClick={save}
          className="rounded border border-red-600 bg-red-600 px-3 py-1.5 text-sm text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
}