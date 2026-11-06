import { useState } from "react";
import Link from "next/link";
import { FaFileAlt, FaTrash } from "react-icons/fa";
import { useAssignmentsStore } from "../../../store/assignmentsStore";
import { useAccountContext } from "../../../account/AccountContext";

export default function AssignmentItem({
  cid,
  aid,
  title,
  details,
}: {
  cid: string;
  aid: string;
  title: string;
  details: string;
}) {
  const deleteAssignment = useAssignmentsStore(
    (state) => state.deleteAssignment,
  );
  const [confirming, setConfirming] = useState(false);
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  return (
    <li className="wd-assignment-list-item mb-3 flex gap-3 border border-neutral-300 border-l-[3px] border-l-green-600 bg-white p-3">
      <FaFileAlt className="mt-1 shrink-0 text-xl text-green-700" />
      <div className="flex-1">
        <Link
          href={`/courses/${cid}/assignments/${aid}`}
          className="wd-assignment-link font-semibold text-neutral-900 no-underline"
        >
          {title}
        </Link>
        <div className="mt-1 text-sm text-neutral-600">{details}</div>
      </div>
      {isFaculty && (
        <FaTrash
          className="wd-delete-assignment mt-1 shrink-0 cursor-pointer text-red-600"
          onClick={() => setConfirming(true)}
          title="Delete assignment"
        />
      )}
      {confirming && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
          id="wd-delete-assignment-dialog"
        >
          <div className="w-full max-w-md rounded-lg bg-white shadow-lg">
            <div className="border-b border-neutral-200 px-4 py-3">
              <h3 className="m-0 text-lg font-semibold">Delete Assignment</h3>
            </div>
            <div className="px-4 py-3 text-sm">
              Are you sure you want to remove <strong>{title}</strong>?
            </div>
            <div className="flex justify-end gap-2 border-t border-neutral-200 px-4 py-3">
              <button
                type="button"
                id="wd-delete-assignment-no"
                onClick={() => setConfirming(false)}
                className="rounded border border-neutral-300 bg-white px-3 py-1.5 text-sm"
              >
                No
              </button>
              <button
                type="button"
                id="wd-delete-assignment-yes"
                onClick={() => {
                  deleteAssignment(aid);
                  setConfirming(false);
                }}
                className="rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      )}
    </li>
  );
}
