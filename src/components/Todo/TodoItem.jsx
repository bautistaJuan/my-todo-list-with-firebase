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
    <li className="flex items-center bg-[rgba(38,167,184,100)] p-3 mb-3 rounded-md">
      {isEditing ? (
        <input
          type="text"
          value={editedTodo}
          onChange={e => setEditedTodo(e.target.value)}
          className="flex-grow text-black mr-2 p-2 rounded"
        />
      ) : (
        <div className="flex items-center flex-grow">
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => toggleTodoCompletion(todo.id, todo.completed)}
            className="mr-2"
          />
          <span
            className={`flex-grow ${
              todo.completed
                ? "line-through text-red-500"
                : "text-white text-lg"
            }`}
          >
            {todo.todo}
          </span>
        </div>
      )}
      <div>
        {isEditing ? (
          <button
            className="mr-2 p-2 bg-gradient-to-r from-green-400 to-green-600 text-white rounded hover:from-green-500 hover:to-green-700"
            onClick={handleSave}
          >
            <FaSave />
          </button>
        ) : (
          <button
            className="mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700"
            onClick={handleEdit}
          >
            <FaPencilAlt />
          </button>
        )}
        <button
          className="p-2 bg-gradient-to-r from-red-400 to-red-600 text-white rounded hover:from-red-500 hover:to-red-700"
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
