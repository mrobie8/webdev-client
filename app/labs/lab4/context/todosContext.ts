import {
  createContext,
  createElement,
  useContext,
  useState,
  type ReactNode,
} from "react";

export type ContextTodo = { id: string; title: string };

type TodosContextValue = {
  todos: ContextTodo[];
  addTodo: (title: string) => void;
  updateTodo: (id: string, title: string) => void;
  deleteTodo: (id: string) => void;
};

const TodosContext = createContext<TodosContextValue | null>(null);

export function TodosProvider({ children }: { children: ReactNode }) {
  const [todos, setTodos] = useState<ContextTodo[]>([
    { id: "1", title: "Learn React" },
    { id: "2", title: "Learn TypeScript" },
    { id: "3", title: "Build a Todo App" },
  ]);
  const addTodo = (title: string) =>
    setTodos((prev) => [...prev, { id: crypto.randomUUID(), title }]);
  const updateTodo = (id: string, title: string) =>
    setTodos((prev) => prev.map((t) => (t.id === id ? { ...t, title } : t)));
  const deleteTodo = (id: string) =>
    setTodos((prev) => prev.filter((t) => t.id !== id));

  // .ts file, so no JSX — build the provider element directly
  return createElement(
    TodosContext.Provider,
    { value: { todos, addTodo, updateTodo, deleteTodo } },
    children,
  );
}

export function useTodosContext() {
  const value = useContext(TodosContext);
  if (!value) {
    throw new Error("useTodosContext must be used inside TodosProvider");
  }
  return value;
}
