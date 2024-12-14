import PropTypes from "prop-types";
import { FaPencilAlt, FaTrash, FaSave } from "react-icons/fa";
import { useState } from "react";

const TodoItem = ({ todo, removeTodo, updateTodo, toggleTodoCompletion }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedTodo, setEditedTodo] = useState(todo.todo);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    if (editedTodo.trim() !== "") {
      updateTodo(todo.id, editedTodo);
      setIsEditing(false);
    }
  };

  return (
    <li className="flex items-center bg-todo-item p-3 mb-3 rounded-md">
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={e => setEditedTodo(e.target.value)}
          className="flex-grow text-[1.1rem] text-black mr-2 p-2 rounded focus:outline-none"
        />
      ) : (
        <div className="flex items-center flex-grow ">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodoCompletion(todo.id, todo.completed)}
            className="mr-2"
          />
          <span
            className={`flex-grow text-[1.5rem] break-all ${
              todo.completed ? "line-through text-gray-700" : "text-white"
            }`}
          >
            {todo.todo}
          </span>
        </div>
      )}
      <div>
        {isEditing ? (
          <button
            className="mr-2 p-2 text-blue-600 text-[1.3rem]"
            onClick={handleSave}
          >
            <FaSave />
          </button>
        ) : (
          <button
            className="mr-2 p-2 text-blue-900 text-[1.3rem]"
            onClick={handleEdit}
          >
            <FaPencilAlt />
          </button>
        )}
        <button
          className="p-2 text-red-500 text-[1.3rem]"
          onClick={() => removeTodo(todo.id)}
        >
          <FaTrash />
        </button>
      </div>
    </li>
  );
};

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  removeTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  toggleTodoCompletion: PropTypes.func.isRequired,
};

export default TodoItem;
