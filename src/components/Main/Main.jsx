import { FaPlus, FaCheck } from "react-icons/fa";
import TodoList from "../Todo/TodoList";
const Main = () => {
  return (
    <>
      <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-screen-lg lg:w-1/4">
        <h1 className="text-3xl font-bold text-center mb-4">ToDo App</h1>
        <div className="flex">
          <input
            type="text"
            placeholder="Add a todo"
            className="py-2 px-4 border rounded w-full focus:outline-none mr-2"
            value={input}
            onChange={e => setInput(e.target.value)}
          />
          <button
            className="bg-gradient-to-r from-blue-400 to-blue-600 hover:from-blue-500 hover:to-blue-700 text-white py-2 px-4 rounded"
            onClick={editIndex === -1 ? addTodo : updateTodo}
          >
            {editIndex === -1 ? <FaPlus /> : <FaCheck />}
          </button>
        </div>
      </div>

      {todos.length > 0 && (
        <TodoList todos={todos} setEdit={setEdit} removeTodo={removeTodo} />
      )}
    </>
  );
};

export default Main;
