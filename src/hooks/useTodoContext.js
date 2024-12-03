import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const useTodoContext = () => {
  return useContext(TodoContext);
};

export default useTodoContext;
