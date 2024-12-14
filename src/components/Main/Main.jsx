import { useState } from "react";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import TodoList from "../Todo/TodoList";
import useTodoContext from "../../hooks/useTodoContext";
const Main = () => {
  const [input, setInput] = useState("");
  const { addTodo } = useTodoContext();
  const handleAddTodo = () => {
    if (input.trim() !== "") {
      addTodo(input);
      setInput("");
    }
  };
  return (
    <>
      <div className="p-4  w-full max-w-lg absolute top-16">
        <div className="flex relative">
          <input
            type="text"
            placeholder="Nueva tarea"
            className="py-3 px-4 border rounded-md w-full focus:outline-none text-black"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            onClick={handleAddTodo}
            className="py-2 absolute rounded right-2 -top-1"
          >
            <MdOutlineAddCircleOutline className="text-2xl text-gray-400 h-10 w-10" />
          </button>
        </div>
      </div>
      <TodoList />
    </>
  );
};

export default Main;
