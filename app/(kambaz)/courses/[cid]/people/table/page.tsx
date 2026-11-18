"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  FaCheck,
  FaPencilAlt,
  FaPlus,
  FaTrash,
  FaUserCircle,
} from "react-icons/fa";
import * as client from "../client";
import {
  useAccountContext,
  type User,
} from "../../../../account/AccountContext";

const cellInput = "w-full rounded border border-neutral-300 px-2 py-1 text-sm";

export default function PeopleTable() {
  const { cid } = useParams<{ cid: string }>();
  const { currentUser } = useAccountContext();
  const isFaculty = currentUser?.role === "FACULTY";
  const [users, setUsers] = useState<User[]>([]);
  const [draft, setDraft] = useState<User | null>(null);

  useEffect(() => {
    const load = async () => {
      setUsers(await client.findUsersForCourse(cid));
    };
    load();
  }, [cid]);

  const onCreate = async () => {
    const created = await client.createUserForCourse(cid, {
      username: `new_user_${Date.now()}`,
      password: "password",
      firstName: "New",
      lastName: "User",
      email: "",
      role: "STUDENT",
      loginId: "",
      section: "S101",
      lastActivity: "",
      totalActivity: "",
    });
    setUsers([...users, created]);
    setDraft(created);
  };

  const onSave = async () => {
    if (!draft) return;
    const saved = await client.updateUser(draft);
    setUsers(users.map((u) => (u._id === saved._id ? saved : u)));
    setDraft(null);
  };

  const onDelete = async (user: User) => {
    if (!window.confirm(`Remove ${user.firstName} ${user.lastName}?`)) return;
    await client.deleteUser(user._id);
    setUsers(users.filter((u) => u._id !== user._id));
  };

  return (
    <div id="wd-people-table" className="overflow-x-auto">
      {isFaculty && (
        <div className="mb-3 flex justify-end">
          <button
            type="button"
            id="wd-add-people"
            onClick={onCreate}
            className="inline-flex items-center gap-1 rounded bg-red-600 px-3 py-1.5 text-sm font-medium text-white"
          >
            <FaPlus /> People
          </button>
        </div>
      )}
      <table className="w-full border-collapse text-left text-sm">
        <thead>
          <tr className="border-b border-neutral-300">
            <th className="p-2">Name</th>
            <th className="p-2">Login ID</th>
            <th className="p-2">Section</th>
            <th className="p-2">Role</th>
            <th className="p-2">Last Activity</th>
            <th className="p-2">Total Activity</th>
            {isFaculty && <th className="p-2"></th>}
          </tr>
        </thead>
        <tbody>
          {users.map((user) =>
            draft && draft._id === user._id ? (
              // ----- edit row -----
              <tr key={user._id} className="bg-yellow-50">
                <td className="p-2">
                  <div className="flex gap-1">
                    <input
                      className={cellInput}
                      value={draft.firstName}
                      onChange={(e) =>
                        setDraft({ ...draft, firstName: e.target.value })
                      }
                      id="wd-edit-first-name"
                    />
                    <input
                      className={cellInput}
                      value={draft.lastName}
                      onChange={(e) =>
                        setDraft({ ...draft, lastName: e.target.value })
                      }
                      id="wd-edit-last-name"
                    />
                  </div>
                </td>
                <td className="wd-login-id p-2">{draft.loginId}</td>
                <td className="p-2">
                  <input
                    className={cellInput}
                    value={draft.section}
                    onChange={(e) =>
                      setDraft({ ...draft, section: e.target.value })
                    }
                    id="wd-edit-section"
                  />
                </td>
                <td className="p-2">
                  <select
                    className={cellInput}
                    value={draft.role}
                    onChange={(e) =>
                      setDraft({ ...draft, role: e.target.value })
                    }
                    id="wd-edit-role"
                  >
                    <option value="STUDENT">Student</option>
                    <option value="TA">TA</option>
                    <option value="FACULTY">Faculty</option>
                    <option value="ADMIN">Admin</option>
                  </select>
                </td>
                <td className="p-2">{draft.lastActivity}</td>
                <td className="p-2">{draft.totalActivity}</td>
                <td className="p-2 text-nowrap">
                  <FaCheck
                    className="me-3 inline cursor-pointer text-green-600"
                    onClick={onSave}
                    title="Save"
                  />
                  <button
                    type="button"
                    className="text-xs text-neutral-500 underline"
                    onClick={() => setDraft(null)}
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            ) : (
              // ----- normal row (your original markup) -----
              <tr key={user._id} className="odd:bg-neutral-50">
                <td className="wd-full-name p-2 text-nowrap">
                  <FaUserCircle className="me-2 inline align-middle text-3xl text-neutral-500" />
                  <span className="wd-first-name">{user.firstName}</span>{" "}
                  <span className="wd-last-name">{user.lastName}</span>
                </td>
                <td className="wd-login-id p-2">{user.loginId}</td>
                <td className="wd-section p-2">{user.section}</td>
                <td className="wd-role p-2">{user.role}</td>
                <td className="wd-last-activity p-2">{user.lastActivity}</td>
                <td className="wd-total-activity p-2">{user.totalActivity}</td>
                {isFaculty && (
                  <td className="p-2 text-nowrap">
                    <FaPencilAlt
                      className="me-3 inline cursor-pointer text-blue-600"
                      onClick={() => setDraft(user)}
                      title="Edit"
                    />
                    {user._id !== currentUser?._id && (
                      <FaTrash
                        className="inline cursor-pointer text-red-600"
                        onClick={() => onDelete(user)}
                        title="Delete"
                      />
                    )}
                  </td>
                )}
              </tr>
            ),
          )}
        </tbody>
      </table>
    </div>
  );
}
