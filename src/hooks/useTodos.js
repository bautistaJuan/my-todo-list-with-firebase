import { useContext } from "react";
import { TodoContext } from "../context/TodoContext";
const useTodos = () => {
  return useContext(TodoContext);
};

export default useTodos;
