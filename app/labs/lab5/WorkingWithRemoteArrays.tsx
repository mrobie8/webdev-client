"use client";
import { useState } from "react";

const HTTP_SERVER = process.env.NEXT_PUBLIC_HTTP_SERVER;
const linkClass = "rounded bg-blue-600 px-3 py-1.5 text-sm text-white";
const inputClass = "rounded border border-gray-300 px-2 py-1";

export default function WorkingWithRemoteArrays() {
  const API = `${HTTP_SERVER}/lab5/todos`;
  const [todo, setTodo] = useState({
    id: "1",
    title: "NodeJS Assignment",
    description: "Practice CRUD routes in Express", 
    completed: false, 
  });

  return (
    <div id="wd-working-with-arrays">
      <h3 className="text-xl font-semibold">Working with Arrays</h3>

      <h4 className="mt-2 font-semibold">Retrieving Arrays</h4>
      <a id="wd-retrieve-todos" className={linkClass} href={API}>
        Get Todos
      </a>

      <h4 className="font-semibold">Retrieving an Item from an Array by ID</h4>
      <div className="flex items-center gap-2">
        <a
          id="wd-retrieve-todo-by-id"
          className={linkClass}
          href={`${API}/${todo.id}`}
        >
          Get Todo by ID
        </a>
        <input
          id="wd-todo-id"
          className={`${inputClass} w-20`}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
      </div>

      <h4 className="font-semibold">Filtering Array Items</h4>
      <a
        id="wd-retrieve-completed-todos"
        className={linkClass}
        href={`${API}?completed=true`}
      >
        Get Completed Todos
      </a>

      <h4 className="font-semibold">Creating new Items in an Array</h4>
      <a id="wd-create-todo" className={linkClass} href={`${API}/create`}>
        Create Todo
      </a>

      <h4 className="font-semibold">Removing from an Array</h4>
      <a
        id="wd-remove-todo"
        className="rounded bg-red-600 px-3 py-1.5 text-sm text-white"
        href={`${API}/${todo.id}/delete`}
      >
        Remove Todo with ID = {todo.id}
      </a>

      <h4 className="font-semibold">Updating an Item in an Array</h4>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-title"
          className={linkClass}
          href={`${API}/${todo.id}/title/${todo.title}`}
        >
          Update Todo
        </a>
        <input
          className={`${inputClass} w-20`}
          value={todo.id}
          onChange={(e) => setTodo({ ...todo, id: e.target.value })}
        />
        <input
          className={inputClass}
          value={todo.title}
          onChange={(e) => setTodo({ ...todo, title: e.target.value })}
        />
      </div>

      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-completed"
          className={linkClass}
          href={`${API}/${todo.id}/completed/${todo.completed}`}
        >
          Complete Todo ID = {todo.id}
        </a>
        <label className="flex items-center gap-1">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={(e) => setTodo({ ...todo, completed: e.target.checked })}
          />
          Completed
        </label>
      </div>
      <div className="mb-2 flex items-center gap-2">
        <a
          id="wd-update-todo-description"
          className={linkClass}
          href={`${API}/${todo.id}/description/${todo.description}`}
        >
          Describe Todo ID = {todo.id}
        </a>
        <input
          className={`${inputClass} w-72`}
          value={todo.description}
          onChange={(e) => setTodo({ ...todo, description: e.target.value })}
        />
      </div>
      <hr className="my-4" />
    </div>
  );
}
