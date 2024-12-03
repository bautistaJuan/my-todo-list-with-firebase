import TodoItem from "./TodoItem";
import useTodoContext from "../../hooks/useTodoContext";
import Loader from "../Loader/Loader";
const TodoList = () => {
  const { todos, removeTodo, updateTodo, isLoading } = useTodoContext();
  return (
    <div className=" p-6 rounded shadow-md w-full max-w-lg">
      <h2 className="text-lg font-bold mb-4">Todo List</h2>
      <ul>
        {isLoading && <Loader />}
        {todos.map((todo, index) => (
          <TodoItem
            key={index}
            index={index}
            todo={todo}
            setEdit={updateTodo}
            removeTodo={removeTodo}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
