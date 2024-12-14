import TodoItem from "./TodoItem";
import useTodoContext from "../../hooks/useTodoContext";
import Loader from "../Loader/Loader";
import Mock from "./Mock";

const TodoList = () => {
  const { todos, removeTodo, updateTodo, isLoading, toggleTodoCompletion } =
    useTodoContext();
  return (
    <div className="w-full max-w-lg h-[50vh] ">
      <ul>
        {isLoading && <Loader />}
        {todos.length === 0 ? (
          <Mock />
        ) : (
          todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              removeTodo={removeTodo}
              updateTodo={updateTodo}
              toggleTodoCompletion={toggleTodoCompletion}
            />
          ))
        )}
      </ul>
    </div>
  );
};

export default TodoList;
