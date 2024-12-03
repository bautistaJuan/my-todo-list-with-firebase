import { createContext, useEffect, useState } from "react";
import { db } from "../firebase";
import {
  collection,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";
import useAuth from "../hooks/useAuth";
import PropTypes from "prop-types";

const TodoContext = createContext();

const TodoProvider = ({ children }) => {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { user } = useAuth();

  useEffect(() => {
    if (user) {
      const unsubscribe = onSnapshot(
        collection(db, "users", user.uid, "todos"),
        snapshot => {
          setTodos(
            snapshot.docs.map(doc => ({
              id: doc.id,
              todo: doc.data().todo,
              completed: doc.data().completed || false,
            }))
          );
          setIsLoading(false);
        }
      );
      return () => unsubscribe();
    }
  }, [user]);

  const addTodo = async todo => {
    if (user && todo.trim() !== "") {
      await addDoc(collection(db, "users", user.uid, "todos"), {
        todo,
        completed: false,
      });
    }
  };

  const updateTodo = async (id, newTodo) => {
    if (user && newTodo) {
      const todoDocRef = doc(db, "users", user.uid, "todos", id);
      await updateDoc(todoDocRef, { todo: newTodo });
    } else {
      alert("Please enter a valid todo");
    }
  };
  const removeTodo = async id => {
    if (user) {
      await deleteDoc(doc(db, "users", user.uid, "todos", id));
    }
  };
  const toggleTodoCompletion = async (id, completed) => {
    if (user) {
      const todoDocRef = doc(db, "users", user.uid, "todos", id);
      await updateDoc(todoDocRef, { completed: !completed });
    }
  };
  const getCompletedTodos = () => todos.filter(todo => todo.completed);
  const getIncompleteTodos = () => todos.filter(todo => !todo.completed);
  return (
    <TodoContext.Provider
      value={{
        todos,
        addTodo,
        isLoading,
        updateTodo,
        removeTodo,
        toggleTodoCompletion,
        getCompletedTodos,
        getIncompleteTodos,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
};

TodoProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { TodoProvider, TodoContext };
