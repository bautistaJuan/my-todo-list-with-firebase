import TodoItem from "./TodoItem";
import useTodoContext from "../../hooks/useTodoContext";
import Loader from "../Loader/Loader";

const TodoList = () => {
  const { todos, removeTodo, updateTodo, isLoading, toggleTodoCompletion } =
    useTodoContext();
  return (
    <div className="w-full overflow-y-auto h-[50vh] max-w-lg">
      <ul>
        {isLoading && <Loader />}
        {todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
            toggleTodoCompletion={toggleTodoCompletion}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
