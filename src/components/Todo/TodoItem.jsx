import PropTypes from "prop-types";
import { FaPencilAlt, FaTrash } from "react-icons/fa";
const TodoItem = ({ todo, index, setEdit, removeTodo }) => {
  return (
    <li className="flex items-center justify-between bg-orange-400 p-3 rounded shadow-md mb-3 gap-4">
      <span className="text-lg">{todo.todo}</span>
      <div>
        <button
          className="mr-2 p-2 bg-gradient-to-r from-gray-400 to-gray-600 text-white rounded hover:from-gray-500 hover:to-gray-700"
          onClick={() => setEdit(index)}
        >
          <FaPencilAlt />
        </button>
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
  index: PropTypes.number.isRequired,
  setEdit: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoItem;
