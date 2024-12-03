import { useState } from "react";
import { FaPlus } from "react-icons/fa";
import TodoList from "../Todo/TodoList";
import useTodoContext from "../../hooks/useTodoContext";
const Main = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useTodoContext();

  return (
    <>
      <div className="p-6 rounded shadow-md w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center mb-4">ToDo App</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Add a todo"
            className="py-2 px-4 border rounded w-full focus:outline-none mr-2 text-black"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            onClick={() => addTodo(input)}
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-2 px-4 rounded"
          >
            <FaPlus />
          </button>
        </div>
      </div>
      <TodoList />
    </>
  );
};

export default Main;
