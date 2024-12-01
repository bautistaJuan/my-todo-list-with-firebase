import TodoItem from "./TodoItem";
import PropTypes from "prop-types";
const TodoList = ({ todos, setEdit, removeTodo }) => {
  return (
    <div className="bg-gray-100 p-6 rounded shadow-md w-full max-w-lg lg:w-1/4">
      <ul>
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            setEdit={setEdit}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};
TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setEdit: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
};

export default TodoList;
