import { useState } from "react";
import { useTodosContext } from "./todosContext";

export default function ReactContextTodoList() {
  const { todos, addTodo, updateTodo, deleteTodo } = useTodosContext();
  const [draft, setDraft] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const cancel = () => {
    setEditingId(null);
    setDraft("");
  };
  const save = () => {
    if (draft.trim() === "") return;
    if (editingId) updateTodo(editingId, draft);
    else addTodo(draft);
    cancel();
  };

  return (
    <div id="wd-context-todo-list">
      <h3>Context Todo List</h3>
      <div className="mb-2 flex flex-wrap gap-2">
        <input
          id="wd-context-todo-draft"
          className="rounded border border-neutral-300 px-2 py-1"
          placeholder="New todo"
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
        />
        <button
          type="button"
          id="wd-context-todo-save"
          onClick={save}
          className="rounded bg-teal-600 px-3 py-1.5 text-sm text-white"
        >
          {editingId ? "Save" : "Add"}
        </button>
        {editingId && (
          <button
            type="button"
            id="wd-context-todo-cancel"
            onClick={cancel}
            className="rounded border border-neutral-300 px-3 py-1.5 text-sm"
          >
            Cancel
          </button>
        )}
      </div>
      <ul className="m-0 max-w-lg list-none p-0">
        {todos.map((todo) => (
          <li
            key={todo.id}
            id={`wd-context-todo-${todo.id}`}
            className="mb-1 flex items-center justify-between rounded border border-neutral-200 px-3 py-1.5"
          >
            <span>{todo.title}</span>
            <span className="flex gap-2">
              <button
                type="button"
                className="rounded bg-yellow-400 px-2 py-0.5 text-sm"
                onClick={() => {
                  setEditingId(todo.id);
                  setDraft(todo.title);
                }}
              >
                Edit
              </button>
              <button
                type="button"
                className="rounded bg-red-600 px-2 py-0.5 text-sm text-white"
                onClick={() => {
                  if (editingId === todo.id) cancel();
                  deleteTodo(todo.id);
                }}
              >
                Delete
              </button>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
